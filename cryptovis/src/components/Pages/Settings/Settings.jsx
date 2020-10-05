import React from 'react'
import ConfirmButton from '../../ConfirmButton'
import PageWrapper from '../../PageWrapper'
import CoinGrid from './CoinGrid'
import Search from '../../Search'

export default function() {
    return <PageWrapper name="Settings">
        <h3> Chosen Coin List</h3>
        <CoinGrid favoriteSection/>
       <ConfirmButton/>
       <Search/>
       <h3>Choose up to 10 coins you would like to analyze</h3>
       <CoinGrid/>
       </PageWrapper>
    
}