import React from 'react'
import {Context} from '../StateManager'

export default function ({name, children}) {
    return <Context.Consumer>
    {({page}) => {
        if (page !== name) {
            return null
        }
        return <div>{children}</div>
    }}
</Context.Consumer>
}