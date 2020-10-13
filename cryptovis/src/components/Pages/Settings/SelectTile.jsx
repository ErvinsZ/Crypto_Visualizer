import React from 'react'
import styled from 'styled-components'
import {subtleBoxShadow, purpleBackground, neonBoxShadow, redBoxShadow} from '../../Styles'

export const Tile = styled.div`
${subtleBoxShadow};
${purpleBackground};
padding: 10px;
border-radius:10px;
`
export const CoinSpotlightTile = styled.div`
${subtleBoxShadow};
${purpleBackground};
padding: 10px;
width:92%;
border-radius:10px;
@media (max-width: 480px) {
    display:none;
  }
`

export const PriceChartTile = styled.div`
${subtleBoxShadow};
${purpleBackground};
padding: 10px;
border-radius:10px;
@media (max-width: 480px) {
    width:340px
  }
`

export const SelectTile = styled(Tile)`
&:hover {
    cursor: pointer;
    border-radius:10px;
    ${neonBoxShadow}
}
`

export const DeleteTile = styled(SelectTile)`
&:hover{
    cursor: pointer;
    border-radius:10px;
    ${redBoxShadow}
}
`

export const DisableTile = styled(Tile)`
pointer-events: none;
border-radius:10px;
opacity: 0.5;
`