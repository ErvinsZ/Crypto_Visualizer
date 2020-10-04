import React from 'react'
import styled from 'styled-components'
import {Context} from '../StateManager'

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: green;
    cursor: pointer;
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
                <ConfirmButtonStyled onClick={confirmFavourites}>
                    Confirm Favourites
                </ConfirmButtonStyled>
            </CenterDiv>
            }
        </Context.Consumer>
    )
}
