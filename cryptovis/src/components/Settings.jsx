import React from 'react'
import ConfirmButton from './ConfirmButton'
import Welcome from './Welcome'
import PageWrapper from './PageWrapper'
import CoinGrid from './Grid/CoinGrid'
import Search from './Search'

export default function() {
    return <PageWrapper name="Settings">
        <Welcome/>
        <CoinGrid favoriteSection/>
       <ConfirmButton/>
       <Search/>
       <CoinGrid/>
       </PageWrapper>
    
}