import highchartsConfig from './HighchartsConfig'
import React from 'react'
import {Tile} from '../Settings/SelectTile'
import {Context} from '../../../StateManager'
import ReactHighcharts from 'react-highcharts'

export default function(){
    return (
        <Context.Consumer>
            {({}) => 
            <Tile>
                <ReactHighcharts config={highchartsConfig()}/>
            </Tile>
            }
        </Context.Consumer>
    ) 
}