import React from 'react'
import styled, {css} from 'styled-components'

const CoinImage = styled.img`
height: 50px;
${props => props.spotlight && css`
height: 200px;
margin: auto;
display: block;
`}
`


export default function({coin, spotlight}) {
fetch(`http://cryptocompare.com/${coin.ImageUrl}`).then(response => console.log(response.json()))



    fetch('https://api.remove.bg/v1.0/removebg', {
    method: 'POST',
    formData:{
        image_url: `http://cryptocompare.com/${coin.ImageUrl}`,
        size: 'auto',
    },
    headers:{
        'X-Api-Key': 'P66VdZmpZXRzxTkKJSvU5Wem'
    },
    encoding: null
      
    
})
    return (
        <CoinImage
        spotlight={spotlight}
        alt={coin.CoinSymbol}
        src={`http://cryptocompare.com/${coin.ImageUrl}`}  

        />
        
    )
    
}
