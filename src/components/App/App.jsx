import { Component } from "react";
import { GlobalStyle, TitleStyled } from "./App.styled";
import Container from "../rep/Container/Container.jsx";
import { ButtonStyled } from "./App.styled";
import api from "../../api.js";
import { BeatLoader } from "react-spinners";
import { errorToast } from "../../constans/toasts.js";
import { Toaster } from "react-hot-toast";
import CatsFilter  from "../CatsFilter/CatsFilter.jsx"
import CatsList from "../CatsList/CatsList.jsx";

class App extends Component {
  state = {
    cats: [],
    loading: false,
    error: false,
    breed: [],
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const cats = await api.getCats();
      this.setState({ cats: cats });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  changeList = async () => {
    try {
      this.setState({ loading: true });
      let newCats = [];

      if (this.state.breed.length > 0) {
        const breedImages = await Promise.all(
          this.state.breed.map(async (item) => {
            return await api.getImagesDyBreeds(item.id);
          })
        );
        newCats = breedImages.flat();
      } else {
        newCats = await api.getCats();
      }

      const tenNewCats = newCats.filter(
        (newCat) =>
          !this.state.cats.some((existingCat) => existingCat.id === newCat.id)
      ).slice(0, 10);

      if (tenNewCats.length === 0) {
        this.setState({ loading: false });
        return;
      }

      this.setState((prevState) => ({
        cats: [...prevState.cats, ...tenNewCats],
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  sortCatsByBreeds = async (newBreed) => {
    try {
      this.setState({ loading: true, cats: newBreed });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  updateCats = (newCats) => {
    this.setState({ cats: newCats });
  };
  updateLoading = (type) => {
    this.setState({ loading: type });
  };
  updateBreeds = (newBreed) => {
    this.setState({ breed: newBreed });
  };

  render() {
    const { cats, loading, error } = this.state;

    return (
      <>
        <Container>
          <TitleStyled>Kitties</TitleStyled>
          <CatsFilter
            updateBreeds={this.updateBreeds}
            changeList={this.changeList}
            updateLoading={this.updateLoading}
            updateCats={this.updateCats}
            sortCatsByBreeds={this.sortCatsByBreeds}
          />
          {error && errorToast()}
          {cats.length > 0 && <CatsList catsList={cats} />}
          {loading && <BeatLoader size={50} />}
          <ButtonStyled
            onClick={() => {
              this.changeList();
            }}
            type="button"
            disabled={loading}
          >
            load more
          </ButtonStyled>
        </Container>
        <Toaster position="top-center" />
        <GlobalStyle />
      </>
    );
  }
}

export default App;
