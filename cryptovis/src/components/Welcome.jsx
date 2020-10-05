import React from 'react'
import {Context} from '../StateManager'

export default function ({firstVisit}){
    return (
        <Context.Consumer>
            {({firstVisit}) => 
            firstVisit ? <div>
                Favourite Coin List.{''}
            </div> : null
            }   
        </Context.Consumer>

    )
}
