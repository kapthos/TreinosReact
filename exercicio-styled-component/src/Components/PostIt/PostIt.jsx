import React from "react";
import styled from "styled-components";

const Papel = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
    display: flex;
    flex-direction: column;
    height: 25rem;
    width: 25rem;
    background: #ddee80;
    z-index: 0;

    & h1 {
        margin-left: 2rem;
        font-size: 4rem;
        font-family: 'Shadows Into Light', cursive;
    }

    & p {
        margin-left: 2rem;
        font-size: 3rem;
        margin-top: -1rem;
        font-family: 'Shadows Into Light', cursive;
    }

    &:hover {
        transform: scale(1.15) rotate(5deg);
        transition: all 0.2s linear;
        box-shadow: 25px 15px 15px #111;
        z-index: 1;
    }
`

export function PostIt(props) {
    return (
        <Papel>
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
        </Papel>
    )
}