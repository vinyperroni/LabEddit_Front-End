import styled from "styled-components"
import { primaryColor, secundaryColor } from "./constants/colors"

export const Hr = styled.hr`
    width: 90vw;
    max-width: 400px;
    margin: 20px 0;
    height: 1px;
    border: none;
    border-radius: 100px;
    background-image: linear-gradient(to right, ${secundaryColor} 0%, ${primaryColor}  51%, ${secundaryColor}  100%);

`

