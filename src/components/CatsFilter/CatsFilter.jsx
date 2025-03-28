import { Formik, Form, Field } from "formik";
import { Component } from "react";
import { WrapField, StyledInput, FormStyled } from "./CatsFilter.styled";
import api from "../../api";
import { emptyToast } from "../../constans/toasts";

const allBreeds = await api.getBreeds();

class CatsFilter extends Component {
  handleChange = async (e) => {
    const { updateCats, updateLoading, changeList, sortCatsByBreeds, updateBreeds } = this.props;
    updateLoading(true);
    updateCats([]);
    const value = e.target.value.trim()

    if(value === ""){
      console.log("this list changes");
      await updateBreeds([])
      await changeList()
      return
    }

    const similarBreeds = allBreeds.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });

    if (similarBreeds.length === 0 ) {
      console.log("not found");
      emptyToast();
    } else {
      const images = await Promise.all(
        similarBreeds.map(async (item) => {
          return await api.getImagesDyBreeds(item.id);
        })
      );
      sortCatsByBreeds(images.flat());
      updateBreeds(similarBreeds)
    }

    updateLoading(false);
  };
  
  render() {
    return (
      <Formik>
        <FormStyled>
          <WrapField>
            Порода
            <StyledInput
              onChange={(e) => {
                this.handleChange(e);
              }}
              name="title"
              type="text"
              placeholder="шукати..."
            />
          </WrapField>
        </FormStyled>
      </Formik>
    );
  }
}

export default CatsFilter;