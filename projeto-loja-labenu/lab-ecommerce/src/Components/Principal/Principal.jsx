import React from 'react'
import { DivPrincipal } from './PrincipalStyled'
import { Main } from './../Main/Main';
import { Filter } from './../Filter/Filter';


export function Principal() {
    return (
        <DivPrincipal>
            <Filter />
            <Main />
        </DivPrincipal>
    )
}