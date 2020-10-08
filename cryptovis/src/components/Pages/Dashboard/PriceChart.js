import highchartsConfig from './HighchartsConfig'
import React from 'react'
import {Tile} from '../Settings/SelectTile'
import {Context} from '../../../StateManager'
import ReactHighcharts from 'react-highcharts'
import HighChartsTheme from './HighchartsTheme'
import styled from "styled-components"

ReactHighcharts.Highcharts.setOptions(HighChartsTheme)

const PriceChartResponive = styled.div`
@media (max-width: 480px) {
    width:300px;
  }
`

export default function(){
    return (
        <PriceChartResponive>
        <Context.Consumer>
            {({historical}) => 
            <Tile>
               {historical ? <ReactHighcharts config={highchartsConfig(historical)}/>
                : <div>Loading data</div>
                }
            </Tile>
            }
        </Context.Consumer>
        </PriceChartResponive>
    ) 
}