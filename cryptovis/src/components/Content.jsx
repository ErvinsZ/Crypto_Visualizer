import React from 'react'
import {Context} from '../StateManager'

export default function(props){
    return <Context.Consumer>
        {({coinList}) => {
            if(!coinList){
                return <div> Loading Coins</div>
            }
            return <div>{props.children}</div>
        }}
    </Context.Consumer>
}