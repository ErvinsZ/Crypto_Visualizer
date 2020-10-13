import highchartsConfig from './HighchartsConfig'
import React from 'react'
import {PriceChartTile} from '../Settings/SelectTile'
import {Context} from '../../../StateManager'
import ReactHighcharts from 'react-highcharts'
import HighChartsTheme from './HighchartsTheme'
import ChartSelect from './ChartSelect'
 
ReactHighcharts.Highcharts.setOptions(HighChartsTheme)

export default function(){
    return (
        <Context.Consumer>
            {({historical, changeChartSelect}) => 
            <PriceChartTile>
                <ChartSelect defaultValue="months" onChange={e => changeChartSelect(e.target.value)}>
                    <option value="days">Days</option>
                    <option value="weeks">Weeks</option>
                    <option value="months">Months</option>
                </ChartSelect>
               {historical ? <ReactHighcharts config={highchartsConfig(historical)}/>
                : <div>Loading data</div>
                }
            </PriceChartTile>
            }
        </Context.Consumer>
    ) 
}