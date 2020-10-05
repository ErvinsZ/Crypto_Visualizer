import React from 'react'
import _ from 'lodash'
const cc = require('cryptocompare')
const API_KEY = process.env.REACT_APP_CRYPTO_KEY
cc.setApiKey(API_KEY)

const MAX_FAVORITES = 10
export const Context = React.createContext()

export class StateManager extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'Dashboard',
            favorites: ['BTC', 'ETH'],
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            alreadyInFavorites: this.alreadyInFavorites,
            confirmFavourites: this.confirmFavourites,
            setFilteredCoins: this.setFilteredCoins,
            setCurrentFavorite: this.setCurrentFavorite,


        }
    }

    addCoin = key => {
        let favorites = [...this.state.favorites]
        if(favorites.length < MAX_FAVORITES) {
            favorites.push(key);
            this.setState({favorites})
        }
    }

    removeCoin = key => {
        let favorites = [...this.state.favorites]
        this.setState({favorites: _.pull(favorites, key)})
    }

    alreadyInFavorites = key => _.includes(this.state.favorites, key)

    componentDidMount = () => {
        this.fetchCoins()
        this.fetchPrices()
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data
        this.setState({coinList})
    }

    fetchPrices = async() =>{
        if(this.state.firstVisit) return
        let prices = await this.prices()
        prices = prices.filter(price => Object.keys(price).length);
        this.setState({prices});
    }

    prices = async() =>{
        let returnData = []
        for(let i =0; i < this.state.favorites.length; i++){
            try{
                let priceData = await cc.priceFull(this.state.favorites[i], 'USD')
                returnData.push(priceData)
            } catch(e){
                console.warn('Fetch price error', e)
            }
        }
        return returnData
    }
    confirmFavourites = () => {
        let currentFavorite = this.state.favorites[0]
        this.setState({
            firstVisit:false,
            page: 'Dashboard',
            currentFavorite,
        }, () => {
            this.fetchPrices()
        })
        localStorage.setItem('cryptoVis', JSON.stringify({
            favorites: this.state.favorites,
            currentFavorite
        }))
    }

    setCurrentFavorite = (symbol) => {
        this.setState({
            currentFavorite: symbol
        })
        localStorage.setItem('cryptoVis', JSON.stringify({
            ...JSON.parse(localStorage.getItem('cryptoVis')),
            currentFavorite: symbol
        }))
    }

    savedSettings(){
        let cryptoVisData = JSON.parse(localStorage.getItem('cryptoVis'));
        if(!cryptoVisData){
            return{page:'Settings', firstVisit:true}
        }
        let {favorites,currentFavorite} = cryptoVisData
        return {favorites, currentFavorite}
    }
    setPage = page => this.setState({page})

    setFilteredCoins = (filteredCoins) => this.setState({filteredCoins})

    render(){
        return(
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}