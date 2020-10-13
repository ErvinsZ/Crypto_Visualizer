import React from 'react'
import styled, {css} from 'styled-components'

const CoinImage = styled.img`
height: 50px;
filter: white;
border-radius: 50%;
background-color: white;
box-shadow: 1px 2px 7px 0px black;
${props => props.spotlight && css`
height: 300px;
margin: auto;
display: block;
border-radius: 50%;
background-color: white;
box-shadow: 1px 2px 7px 0px black;

`}
`


export default function({coin, spotlight}) {
   
    return (
        <CoinImage
        spotlight={spotlight}
        alt={coin.CoinSymbol}
        src={`http://cryptocompare.com/${coin.ImageUrl}`}  

        />
        
    )
    
}
