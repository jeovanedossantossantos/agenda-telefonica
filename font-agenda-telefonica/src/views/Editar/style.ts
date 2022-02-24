import styled from "styled-components"

export const Container = styled.div`

    margin:auto;
    justify-content:center;
    align-items:center;

`

export const Title = styled.div`
    text-align:center;
    font-size:32px;
    
    
`
export const Button = styled.button`

    cursor: pointer;
    margin:10px;
    background: transparent;
    border:none;

    font-family: "Gotham-Medium";

    color: rgb(100, 102, 107);

    :hover{
        transition: 1s;
        color:#fff;

    }
`