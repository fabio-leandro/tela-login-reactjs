import styled from "styled-components";

export const ContainerLeft = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 600px){
        width: 100%;
        height: auto;
    }
`

export const TituloLeft = styled.h1`
    color: #77ffc0;

    @media only screen and (max-width: 600px){
        display: none;
    }
`

export const Image = styled.img`
    width: 35vw;

    @media only screen and (max-width: 600px){
        width: 50vw;
    }
    
`