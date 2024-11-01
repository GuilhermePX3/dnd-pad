import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

    body{
        box-sizing: border-box;
        padding:0px;
        margin: 0px;
    }

    p{
        margin: 0px;
    }

    .flex{
        * {
            display: flex;
        }
    }
`
