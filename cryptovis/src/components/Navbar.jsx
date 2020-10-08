import React from 'react'
import styled, {css} from 'styled-components'
import {Context} from '../StateManager'

const Logo = styled.div`
 font-size: 1.5em;
 @media (max-width: 480px) {
    margin-bottom:25px
  }
`

const Navbar = styled.div`
display: grid;
margin-bottom:40px;
grid-template-columns: 180px auto 100px 100px;
@media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const ControlButtonElement = styled.div`
cursor: pointer;
${props=>props.active && css`
    text-shadow: 0px 0px 10px green
`}
${props => props.hidden && css`
display: none;
`}
`

function ControlButton({name}){
    return (
    <Context.Consumer>
        {({firstVisit, page, setPage}) => (
        <ControlButtonElement 
            active={page === name}
            onClick={()=> setPage(name)}
            hidden={firstVisit && name === 'Dashboard'}
            >
            {name}
        </ControlButtonElement>
        )}
    </Context.Consumer>
)
}
export default function(){
    return<Navbar>
        <Logo>CryptoVisualizer</Logo>
        <div></div>
        <ControlButton active name="Dashboard"></ControlButton>
        <ControlButton name="Settings"></ControlButton>
    </Navbar>
}
