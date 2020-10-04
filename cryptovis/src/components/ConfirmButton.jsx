import React from 'react'
import styled from 'styled-components'
import {Context} from '../StateManager'
import { color3, fontSize1, neonBoxShadow } from './Styles'

const ConfirmButton = styled.div`
    margin: 20px;
    color: ${color3};
    ${fontSize1};
    padding: 5px;
    cursor: pointer;
    &:hover {
        ${neonBoxShadow}
    }
`

export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`
export default function() {
    return (
        <Context.Consumer>
            {({confirmFavourites}) => 
            <CenterDiv>
                <ConfirmButton onClick={confirmFavourites}>
                    Confirm Favourites
                </ConfirmButton>
            </CenterDiv>
            }
        </Context.Consumer>
    )
}
