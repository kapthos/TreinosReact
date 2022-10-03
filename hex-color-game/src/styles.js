import styled from "styled-components"

export const Container = styled.div`
    margin-top: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ColoredBox = styled.div`
    width: 350px;
    height: 250px;
    background-color: ${(props) => props.colorProps};
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.34);
`

export const ButtonsContainer = styled.div`
    margin-top: 50px;
    width: 25vw;
    display: flex;
    justify-content: space-around;
`

export const ButtonsStyled = styled.button`
    font-size: 20px;
    padding: 10px;
    background-color: #EEE;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.34);
    cursor: pointer;
`