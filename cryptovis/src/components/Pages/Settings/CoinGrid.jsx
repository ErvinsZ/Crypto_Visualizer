import React from 'react'
import styled, {css} from 'styled-components'
import {Context} from '../../../StateManager'
import CoinTile from './CoinTile'

export const CoinGrid = styled.div`
display: grid;
grid-template-columns: repeat(5, minmax(150px, 1fr));
grid-gap: 25px;
margin-top: 40px;
@media (max-width: 480px) {
    grid-template-columns: repeat(2, 167px);
    grid-template-columns: repeat(minmax(200px, 1fr));
  }
`
function getSearchedCoins(coinList, filteredCoins){
    return filteredCoins && Object.keys(filteredCoins) ||
        Object.keys(coinList).slice(0,40)
}
function displayCoins(coinList, favoriteSection, favorites, filterCoins){
    return favoriteSection ? favorites : getSearchedCoins(coinList,filterCoins)
}
export default function({favoriteSection}) {
    return <Context.Consumer>
        {({coinList, favorites, filteredCoins}) => <CoinGrid>
            {displayCoins(coinList, favoriteSection, favorites, filteredCoins).map(coinKey =>
                <CoinTile key={coinKey} favoriteSection={favoriteSection} coinKey={coinKey}/>
                )}
            </CoinGrid>}
    </Context.Consumer>
}
