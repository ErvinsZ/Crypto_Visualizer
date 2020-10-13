import React from 'react'
import ConfirmButton from '../../ConfirmButton'
import PageWrapper from '../../PageWrapper'
import CoinGrid from './CoinGrid'
import Search from '../../Search'
import styled from 'styled-components'

const ActionRow = styled.div`
display:grid;
grid-template-columns: 85% 15% ;
margin-top:40px;
@media (max-width: 480px) {
   display:none;
  }
`
const ActionRowMobile = styled.div`
@media (max-width: 480px) {
grid-template-columns: repeat(2, 1fr);
grid-template-columns: 240px auto 100px;
}
@media (min-width: 480px) {
    display:none;
   }
`

export default function() {
    return <PageWrapper name="Settings">
        <h3> Chosen Coin List</h3>
        <CoinGrid favoriteSection/>
        <ActionRow>
            <Search/>
            <ConfirmButton/>
       </ActionRow>
       <ActionRowMobile>
            <ConfirmButton/>
            <Search/>
       </ActionRowMobile>
       <h3>Choose up to 10 coins you would like to analyze</h3>
       <CoinGrid/>
       </PageWrapper>
    
}