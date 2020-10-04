import React from 'react'
import {Context} from '../StateManager'

export default function ({firstVisit}){
    return (
        <Context.Consumer>
            {({firstVisit}) => 
            firstVisit ? <div>
                Choose your favorite coins.{''}
            </div> : null
            }   
        </Context.Consumer>

    )
}
