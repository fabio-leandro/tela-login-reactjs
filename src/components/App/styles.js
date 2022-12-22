import styled from 'styled-components';


export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #201b2c;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 950px){
        flex-direction: column;
    }

`