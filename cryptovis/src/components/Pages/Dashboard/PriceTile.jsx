import React from 'react'
import styled, {css} from 'styled-components'
import {SelectTile} from '../Settings/SelectTile'
import {fontSize3} from '../../Styles'
import {CoinHeaderGrid} from '../Settings/CoinHeaderGrid'
import {fontSizeBig, neonBoxShadow} from '../../Styles'
import {Context} from '../../../StateManager'

const JustifyRight = styled.div`
justify-self:right;
font-size:1.15em;
`
const Hr = styled.hr`
background-color: transperant;
height:2px;
border:none
`
const JustifyLeft = styled.div`
justify-self:left`

const TickerPrice = styled.div`
${fontSizeBig};

`
const ChangePct = styled.div`
color:#4ee64e;
${props => props.red && css`
color:#940000;
`}
`
const numberFormat = number => {
    return + (number + '').slice(0,7)
}

const PriceTileStyled = styled(SelectTile)`
${props => props.compact && css`
display:grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 5px;
justify-items: right;
${fontSize3}
`}

${props => props.currentFavorite && css`
${neonBoxShadow};
pointer-events:none;
`}
`
function ChangePercent({data}){
    return(
        <JustifyRight>
            <ChangePct red={data.CHANGEPCT24HOUR < 0}>
            {numberFormat(data.CHANGEPCT24HOUR)}% 
            </ChangePct>  
        </JustifyRight>
    )
}

function PriceTile({symbol, data, currentFavorite, setCurrentFavorite}){
    return(
        <PriceTileStyled onClick={setCurrentFavorite} currentFavorite = {currentFavorite}>
            <CoinHeaderGrid>
                <div>{symbol}</div>
            <ChangePercent data={data}/>   
            </CoinHeaderGrid>
            <Hr></Hr>
            <TickerPrice>
                ${numberFormat(data.PRICE)}
            </TickerPrice>
        </PriceTileStyled>
    )
}

function PriceTileCompact({symbol, data, currentFavorite, setCurrentFavorite}){
    return(
        <PriceTileStyled onClick={setCurrentFavorite} compact currentFavorite={currentFavorite}> 
                <JustifyLeft>{symbol}</JustifyLeft>
            <ChangePercent data={data}/> 
            <div>
                ${numberFormat(data.PRICE)}
            </div>
        </PriceTileStyled>
    )
}

export default function({price, index}){
    let symbol = Object.keys(price)[0]
    let data = price[symbol]['USD']
    let TileClass = index < 5 ? PriceTile : PriceTileCompact
return (
    <Context.Consumer>
        {({currentFavorite, setCurrentFavorite}) => 
        <TileClass 
            symbol={symbol} 
            data={data} 
            currentFavorite={currentFavorite===symbol}
            setCurrentFavorite={() => setCurrentFavorite(symbol)}
        >
        </TileClass>
        }
    </Context.Consumer>
)
}