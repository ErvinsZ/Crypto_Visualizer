import React from 'react'
import styled from 'styled-components'
import {Context} from '../StateManager'
import { color3, fontSize1, neonBoxShadow } from './Styles'

const ConfirmButton = styled.button`
    margin: 20px;
    color: ${color3};
    ${fontSize1};
    padding: 5px;
    font-weight: 600;
    background: transparent;
    outline:none;
    border: solid #de9f7a;
    border-radius: 15px;
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
                    Confirm Coins
                </ConfirmButton>
            </CenterDiv>
            }
        </Context.Consumer>
    )
}
