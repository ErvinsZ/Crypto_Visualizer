import React from 'react'
import {Context} from '../../../StateManager'
import {SelectTile, DeleteTile, DisableTile} from './SelectTile'
import CoinHeaderGrid from './CoinHeaderGrid'
import CoinImage from '../../CoinImage'
import styled from 'styled-components'

const Hr = styled.hr`
background-color: transperant;
height:2px;
border:none

`

function clickCoin(favoriteSection, coinKey, addCoin, removeCoin){
    return favoriteSection ? () => {
        removeCoin(coinKey)
    } : () => {
        addCoin(coinKey)
    }
}

export default function({coinKey, favoriteSection}) {
    return <Context.Consumer>
        {({coinList, addCoin, removeCoin, alreadyInFavorites}) => {
            let coin = coinList[coinKey]

            let TileClass = SelectTile;
            if(favoriteSection) {
            TileClass = DeleteTile
            } else if(alreadyInFavorites(coinKey)) {
            TileClass = DisableTile
            }

            return <TileClass onClick={clickCoin(favoriteSection, coinKey, addCoin, removeCoin)}>
                <CoinHeaderGrid  favoriteSection={favoriteSection} name={coin.CoinName} symbol={coin.Symbol}/>
                <Hr></Hr>
                
                <CoinImage coin={coin}/>
            </TileClass>
        }}
    </Context.Consumer>
}
