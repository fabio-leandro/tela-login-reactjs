import styled from "styled-components";


export const ContainerRight = styled.div`

    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 600px){
        width: 100%;
        height: auto;
    }
`

export const CardLogin = styled.div`

        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px 35px;
        background-color: #2f2841;
        border-radius: 20px;
        box-shadow: 0px 10px 40px #00000056;

        @media only screen and (max-width: 600px){
            width: 90%;
        }

        @media only screen and (max-width: 950px){
            width: 85%;
        }

`

export const TitleCardLogin = styled.h1`

    font-size: 3vw;
    color: #00ff88;
    font-weight: 800;
    margin: 0;

`

export const TextField = styled.label`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0px;
`

export const Label = styled.label`
    color: #f0ffffde;
    margin-bottom: 10px;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background: #514869;
    color: #f0ffffde;
    font-size: 12pt;
    box-shadow: 0px 10px 40px #00000056;
    outline: none;
    box-sizing: border-box;

    &::placeholder{
        color:#f0ffff94;
    }
`

export const Button = styled.button`
    width: 100%;
    padding: 16px 0px;
    margin: 25px;
    border: none;
    border-radius: 8px;
    outline: none;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 3px;
    color: #2b134b;
    background: #00ff88;
    cursor: pointer;
    box-shadow: 0px 10px 40px -12px #00ff8052;

    &:hover {
        background-color: #77ffc0;
    }
`