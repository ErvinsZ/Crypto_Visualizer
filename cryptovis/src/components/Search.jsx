import React from 'react'
import styled from 'styled-components'
import {backgroundColor2, fontSize2, subtleBoxShadow} from './Styles'
import {Context} from '../StateManager'
import _ from 'lodash'
import fuzzy from 'fuzzy'

const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
      }
`

const SearchInput = styled.input`
${backgroundColor2};
${fontSize2};
${subtleBoxShadow};
outline: none;
color:#FFEFDB;
height: 25px;
place-self: center left
`

const handleFilter = _.debounce((inputValue, coinList, setFilterCoins) => {
    let coinSymbols = Object.keys(coinList)
    let coinNames = coinSymbols.map(symbol => coinList[symbol].CoinName)
    let allStringsToSearch = coinSymbols.concat(coinNames)
    let fuzzyResults = fuzzy.filter(inputValue, allStringsToSearch, {}).map(result => result.string)

    let filteredCoins = _.pickBy(coinList, (result, symKey)=> {
        let coinName = result.CoinName;
        return(_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName))
    })
    setFilterCoins(filteredCoins)
}, 500)

function filterCoins(e, setFilteredCoins, coinList){
    let inputValue = e.target.value;
    if(!inputValue){
        setFilteredCoins(null)
        return
    }
    handleFilter(inputValue, coinList, setFilteredCoins)

}

export default function () {
    return (
    <Context.Consumer>
        {({setFilteredCoins, coinList}) =>
        <SearchGrid>
            <h2>Search coins</h2>
            <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}/>
        </SearchGrid>
        }
    </Context.Consumer>
    )
}
