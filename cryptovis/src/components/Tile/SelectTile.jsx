import React from 'react'
import styled from 'styled-components'
import {subtleBoxShadow, purpleBackground, neonBoxShadow, redBoxShadow} from '../Styles'

export const Tile = styled.div`
${subtleBoxShadow};
${purpleBackground};
padding: 10px;
`

export const SelectTile = styled(Tile)`
&:hover {
    cursor: pointer;
    ${neonBoxShadow}
}
`

export const DeleteTile = styled(SelectTile)`
&:hover{
    cursor: pointer;
    ${redBoxShadow}
}
`

export const DisableTile = styled(Tile)`
pointer-events: none;
opacity: 0.5;
`