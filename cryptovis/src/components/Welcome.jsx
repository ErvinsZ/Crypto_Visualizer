import React from 'react'
import {Context} from '../StateManager'

export default function ({firstVisit}){
    return (
        <Context.Consumer>
            {({firstVisit}) => 
            firstVisit ? <div>
                Chosen Coin List.{''}
            </div> : null
            }   
        </Context.Consumer>

    )
}
