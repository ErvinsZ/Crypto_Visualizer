import React from 'react'
import styled from 'styled-components'
import {DeleteTile} from './SelectTile'

export const CoinHeaderGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`

export const CoinSymbol = styled.div`
justify-self: right;
`

const DeleteIcon = styled.div`
justify-self: right;
display: none;
${DeleteTile}:hover & {
    display: block;
    color: red;
}
`

export default function({name, symbol, favoriteSection}){
    const str = name.split(' ', 2)
    return <CoinHeaderGrid>
        <div>{str}</div>
        {favoriteSection ? (
        <DeleteIcon>X</DeleteIcon>
        ) : (<CoinSymbol>{symbol}</CoinSymbol>)
    }
    </CoinHeaderGrid>
}
