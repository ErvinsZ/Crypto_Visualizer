import React from 'react'
import {Tile} from '../Settings/SelectTile'
import {Context} from '../../../StateManager'
import CoinImage from '../../CoinImage'
import styled from 'styled-components'


const SpotlightName = styled.h2`
text-align:center;
`
const Wrapper = styled.div`
@media (max-width: 480px) {
    display:none
  }
`
export default function(){
    return (
        <Wrapper>
        <Context.Consumer>
            {({currentFavorite, coinList}) => 
        <Tile>
            <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName> 
            <CoinImage spotlight coin={coinList[currentFavorite]}/>
        </Tile>
         }
        </Context.Consumer>
        </Wrapper>
    )
}
