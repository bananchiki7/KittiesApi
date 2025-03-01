import { Component } from "react";
import LangList from "../LangList/LangList.jsx";
import { GlobalStyle } from "./App.styled";
import FilterFormik from "../FilterFormik/FilterFormik";
import Container from "../rep/Container/Container.jsx";
import { ButtonStyled } from "./App.styled";
import api from "../../api.js";
import { BeatLoader } from "react-spinners";
import { errorToast } from "../../constans/toasts.js";
import { Toaster } from "react-hot-toast";

class App extends Component {
  state = {
    langs: [],
    loading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const langs = await api.getLangs();
      console.log(langs);
      this.setState({ langs: langs });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  changeList = async() => {
    try {
      this.setState({ loading: true });
      const langs = await api.getLangs();
      this.setState((prevState) => ({
        langs: [...prevState.langs, ...langs],
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  updateLangs = (newLangs) => {
    this.setState({ langs: newLangs });
  };
  updateLoading = (type) => {
    this.setState({ loading: type });
  };

  render() {
    const { langs, loading, error } = this.state;

    return (
      <>
        <Container>
          <h1>Kitties</h1>
          <FilterFormik
            changeList={this.changeList}
            updateLoading={this.updateLoading}
            updateLangs={this.updateLangs}
          />
          {error && errorToast()}
          {langs.length > 0 && <LangList langs={langs} />}
          {loading && <BeatLoader size={40} />}
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
