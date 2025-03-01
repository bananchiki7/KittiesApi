import { Formik, Form, Field } from "formik";
import { Component } from "react";
import { WrapField, StyledInput, FormStyled } from "./FilterFormik.styled";
import api from "../../api";
import { emptyToast } from "../../constans/toasts";

class FilterFormik extends Component {
  handleChange = async (e) => {
    const { updateLangs, updateLoading } = this.props;
    updateLoading(true);
    updateLangs([]);

    const breeds = await api.getBreeds();

    const similarBreeds = breeds.filter((item) => {
      return item.name.toLowerCase().startsWith(e.target.value.toLowerCase());
    });
    console.log(similarBreeds);

    if (similarBreeds.length === 0 || e.target.value === "") {
      console.log("not found");
      emptyToast();
    } else {
      const images = await Promise.all(
        similarBreeds.map(async (item) => {
          return await api.getImagesDyBreeds(item.id);
        })
      );
      updateLangs(images.flat());
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

export default FilterFormik;
