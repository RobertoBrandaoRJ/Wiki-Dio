import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    color: #000;
    font-weight: 600;
    font-size: 16px;

    height: 62px;
    width: 20%;
    margin-bottom: 40px;
    
    &:hover {
        background-color: #FAFAFA40;
        border: 1px solid #FAFAFA40;
        cursor: pointer;
        color: #FAFAFA;
        font-size: 18px;
    }
`