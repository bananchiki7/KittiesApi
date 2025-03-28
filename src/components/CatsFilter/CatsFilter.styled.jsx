import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import colors from "../../constans/colors";

export const WrapField = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  font-size: 34px;
`;

export const StyledInput = styled(Field)`
 height: 40px;
  padding-left: 26px;
  font-size: 26px;
  border: 3px solid ${colors.BLACK};
  border-radius: 5px;
`;

export const FormStyled = styled(Form)`
  margin-bottom: 40px;
`;

