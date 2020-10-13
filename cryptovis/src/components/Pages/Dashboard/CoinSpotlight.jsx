import React from 'react'
import {CoinSpotlightTile} from '../Settings/SelectTile'
import {Context} from '../../../StateManager'
import CoinImage from '../../CoinImage'
import styled from 'styled-components'


const SpotlightName = styled.h2`
text-align:center;
font-size: 35px;
margin-bottom: 4vh;

`

export default function(){
    return (
        
        <Context.Consumer>
            {({currentFavorite, coinList}) => 
        <CoinSpotlightTile>
            <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName> 
            <CoinImage spotlight coin={coinList[currentFavorite]}/>
        </CoinSpotlightTile>
         }
        </Context.Consumer>
        
    )
}
