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
function getSearchedCoins(coinList, filteredCoins){
    return filteredCoins && Object.keys(filteredCoins) ||
        Object.keys(coinList).slice(0,100)

}
function displayCoins(coinList, favoriteSection, favorites, filterCoins){
    return favoriteSection ? favorites : getSearchedCoins(coinList,filterCoins)
}
export default function({favoriteSection}) {
    return <Context.Consumer>
        {({coinList, favorites, filteredCoins}) => <CoinGrid>
            {displayCoins(coinList, favoriteSection, favorites, filteredCoins).map(coinKey =>
                <CoinTile favoriteSection={favoriteSection} coinKey={coinKey}/>
                )}
            </CoinGrid>}
    </Context.Consumer>
}
