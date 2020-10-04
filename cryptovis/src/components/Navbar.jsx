import React from 'react'
import styled, {css} from 'styled-components'
import {Context} from '../StateManager'

const Logo = styled.div`
 font-size: 1.5em;
`

const Navbar = styled.div`
display: grid;
margin-bottom:40px;
grid-template-columns: 180px auto 100px 100px;
`
const ControlButtonElement = styled.div`
cursor: pointer;
${props=>props.active && css`
    text-shadow: 0px 0px 10px green
`}
`

function ControlButton({name}){
    return (
    <Context.Consumer>
        {({page, setPage}) => (
        <ControlButtonElement 
            active={page === name}
            onClick={()=> setPage(name)}
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
