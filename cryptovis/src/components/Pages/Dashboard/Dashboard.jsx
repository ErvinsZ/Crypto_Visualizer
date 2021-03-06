import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../../PageWrapper'
import PriceGrid from './PriceGrid'
import CoinSpotlight from './CoinSpotlight'
import PriceChart from './PriceChart'

const ChartGrid = styled.div`
display:grid;
margin-top:20px;
grid-template-columns: 1fr 4fr;

`


export default function() {
    return <PageWrapper name="Dashboard">
        <PriceGrid/>
        <ChartGrid>
        <CoinSpotlight/>
        <PriceChart/>
        </ChartGrid>
       </PageWrapper>
    
}