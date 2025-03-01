import styled from "styled-components";
import { ContainerStyled } from "./Container.styled";
import React from "react";

function Container({children}) {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}

export default Container;