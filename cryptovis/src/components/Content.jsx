import React from 'react'
import {Context} from '../StateManager'

export default function(props){
    return <Context.Consumer>
        {({coinList, prices, firstVisit}) => {
            if(!coinList){
                return <div> Loading Coins</div>
            }
            if(!firstVisit && !prices){
                return <div>Loading Prices</div>
            }
            return <div>{props.children}</div>
        }}
    </Context.Consumer>
}