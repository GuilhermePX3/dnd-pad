import { styled } from "styled-components"

export const MixerContainer = styled.div`
    background-color: #eee;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid darkgrey;
    align-items: center;
    justify-content: space-between;
`

export const Wraper = styled.div`
    flex: 1;
    padding: 10px;

    input {
        width: 250px;
    }

    justify-content: space-between;
`

export const IconButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;

    height: 35px;
    aspect-ratio: 1;
`
