import React from 'react'
import styled, {css} from 'styled-components'
import {Context} from '../../StateManager'
import CoinTile from '../Tile/CoinTile'

export const CoinGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
grid-gap: 15px;
margin-top: 40px;
`

function displayCoins(coinList, favoriteSection, favorites){
    return favoriteSection ? favorites : Object.keys(coinList).slice(0, favoriteSection ? 10 : 100)
}
export default function({favoriteSection}) {
    return <Context.Consumer>
        {({coinList, favorites}) => <CoinGrid>
            {displayCoins(coinList, favoriteSection, favorites).map(coinKey =>
                <CoinTile favoriteSection={favoriteSection} coinKey={coinKey}/>
                )}
            </CoinGrid>}
    </Context.Consumer>
}
