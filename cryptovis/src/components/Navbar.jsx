import React from 'react'
import styled, {css} from 'styled-components'
import {Context} from '../StateManager'

const Logo = styled.h1`
 font-size: 2.8em;
 @media (max-width: 480px) {
    margin-bottom:25px;
    font-size: 2.5em;
  }
`

const Navbar = styled.div`
display: grid;
margin-bottom:40px;
grid-template-columns: 100px auto 200px 100px;
@media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-columns: 240px 100px;
  }
`
const ControlButtonElement = styled.h2`
cursor: pointer;
font-size: 1.5em;
margin-top:47px;

${props=>props.active && css`
    text-decoration: underline #76688E;
    color:#AE99BF
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
