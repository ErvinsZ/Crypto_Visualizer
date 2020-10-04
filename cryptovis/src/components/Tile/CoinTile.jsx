import React from 'react'
import {Context} from '../../StateManager'
import {SelectTile, DeleteTile, DisableTile} from './SelectTile'
import CoinHeaderGrid from '../Grid/CoinHeaderGrid'
import CoinImage from '../CoinImage'

export default function({coinKey, favoriteSection}) {
    return <Context.Consumer>
        {({coinList}) => {
            let coin = coinList[coinKey]

            let TileClass = SelectTile;
            if(favoriteSection) {
            TileClass = DeleteTile
            }

            return <TileClass>
                <CoinHeaderGrid favoriteSection={favoriteSection} name={coin.CoinName} symbol={coin.Symbol}/>
                <CoinImage coin={coin}/>
            </TileClass>
        }}
    </Context.Consumer>
}
