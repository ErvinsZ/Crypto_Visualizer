import React from 'react'
import styled, {css} from 'styled-components'
import {SelectTile} from '../Settings/SelectTile'
import {fontSize3} from '../../Styles'
import {CoinHeaderGrid} from '../Settings/CoinHeaderGrid'
import {fontSizeBig} from '../../Styles'

const JustifyRight = styled.div`
justify-self:right;
`

const TickerPrice = styled.div`
${fontSizeBig}
`
const ChangePct = styled.div`
color:green;
${props => props.red && css`
color:red;
`}
`
const numberFormat = number => {
    return + (number + '').slice(0,7)
}

const PriceTileStyled = styled(SelectTile)`
${props => props.compact && css`
${fontSize3}
`}
`
function ChangePercent({data}){
    return(
        <JustifyRight>
            <ChangePct red={data.CHANGEPCT24HOUR < 0}>
            {numberFormat(data.CHANGEPCT24HOUR)}
            </ChangePct>  
        </JustifyRight>
    )
}

function PriceTile({symbol, data}){
    return(
        <PriceTileStyled>
            <CoinHeaderGrid>
                <div>{symbol}</div>
            <ChangePercent data={data}/>   
            </CoinHeaderGrid>
            <TickerPrice>
                ${numberFormat(data.PRICE)}
            </TickerPrice>
        </PriceTileStyled>
    )
}

export default function({price, index}){
    let symbol = Object.keys(price)[0]
    let data = price[symbol]['USD']
return (
<PriceTile symbol={symbol} data={data}>
    {symbol} {data.PRICE}
</PriceTile>
)
}