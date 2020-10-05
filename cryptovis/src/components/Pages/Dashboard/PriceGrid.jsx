import React from 'react'
import styled from 'styled-components'
import {Context} from '../../../StateManager'
import PriceTile from './PriceTile'

const PriceGrid = styled.div`
display:grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 15px;
margin-top: 40px;
`
export default function () {
    return (
        <Context.Consumer>
            {({prices}) => (
                <PriceGrid>
                    {prices.map((price, index) => 
                    <PriceTile key={`priceTile-${index}`} index={index} price={price}/>)}
                </PriceGrid>
            )}
        </Context.Consumer>
    )
}