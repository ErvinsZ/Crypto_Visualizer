import highchartsConfig from './HighchartsConfig'
import React from 'react'
import {PriceChartTile} from '../Settings/SelectTile'
import {Context} from '../../../StateManager'
import ReactHighcharts from 'react-highcharts'
import HighChartsTheme from './HighchartsTheme'

ReactHighcharts.Highcharts.setOptions(HighChartsTheme)

export default function(){
    return (
        <Context.Consumer>
            {({historical}) => 
            <PriceChartTile>
               {historical ? <ReactHighcharts config={highchartsConfig(historical)}/>
                : <div>Loading data</div>
                }
            </PriceChartTile>
            }
        </Context.Consumer>
    ) 
}