import React from 'react'
import styled, {css} from 'styled-components'
import {Context} from '../../StateManager'
import CoinTile from '../Tile/CoinTile'

export const CoinGrid = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 15px;
margin-top: 40px;
`

function displayCoins(coinList, favoriteSection){
    return Object.keys(coinList).slice(0, favoriteSection ? 10 : 100)
}
export default function({favoriteSection}) {
    return <Context.Consumer>
        {({coinList}) => <CoinGrid>
            {displayCoins(coinList, favoriteSection).map(coinKey =>
                <CoinTile favoriteSection={favoriteSection} coinKey={coinKey}/>
                )}
            </CoinGrid>}
    </Context.Consumer>
}
