import styled, { createGlobalStyle } from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import colors from "../../constans/colors";

export const ButtonStyled = styled.button`
    width: 200px;
    height: 60px;
    margin-top: 20px;
    margin-left: 30px;
    font-size: 35px;
    border: 4px solid ${colors.MEDIUM_GREY};
    border-radius: 15px;
`

export const TitleStyled = styled.h1`
  font-size: 44px;
  font-weight: 600;
  margin-top: 40px;
`

export const GlobalStyle = createGlobalStyle`
    *{
      background-color: transparent;
      padding: 0;
      margin: 0; 
      box-sizing: border-box;
    }
    *, *:before, *:after{
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    :focus, :active{outline: none;}
    a:focus, a:active{outline: none;}

    nav,footer,header,aside{display: block;}

    html, body{
      height: 100%;
      width: 100%;
      line-height: 1;
      -ms-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    input, button, textarea{font-family: inherit;}

    input::-ms-clear{display:none;}
    button{cursor: pointer;}
    button::-moz-focus-inner{padding: 0;border: 0;}
    a, a:visited{text-decoration: none;}
    a:hover{text-decoration: none;}
    ul li{list-style-type: none;}
    img{vertical-align: top;}
    img{display: block;}

    h1,h2, h3, h4, h5, h6{font-style: inherit; font-weight: 400;}
`;