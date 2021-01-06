import React from 'react'
import styled from 'styled-components'
import {Context} from '../StateManager'
import { color3, fontSize1, neonBoxShadow } from './Styles'

const ConfirmButton = styled.button`
    margin: 20px;
    color: white;
    ${fontSize1};
    padding: 5px;
    font-weight: 600;
    background: #4F2B51;
    outline:none;
    width:100px;
    outline:none;
    border:none;
    box-shadow: 1px 2px 7px 0px black;
    border-radius: 15px;
    cursor: pointer;
    &:hover {
        ${neonBoxShadow}
    }
`

export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
    align-items: end;
`
export default function() {
    return (
        <Context.Consumer>
            {({confirmFavourites}) => 
            
                <ConfirmButton onClick={confirmFavourites}>
                    Confirm
                </ConfirmButton>
          
            }
        </Context.Consumer>
    )
}
