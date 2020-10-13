import React from 'react'
import _ from 'lodash'
import moment from 'moment'
const cc = require('cryptocompare')
const API_KEY = process.env.REACT_APP_CRYPTO_KEY
cc.setApiKey(API_KEY)

const MAX_FAVORITES = 10
const TIME_UNITS = 10

export const Context = React.createContext()

export class StateManager extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'Dashboard',
            favorites: ['BTC', 'ETH', 'LTC'],
            timeInterval: "months",
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            alreadyInFavorites: this.alreadyInFavorites,
            confirmFavourites: this.confirmFavourites,
            setFilteredCoins: this.setFilteredCoins,
            setCurrentFavorite: this.setCurrentFavorite,
            changeChartSelect: this.changeChartSelect,


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
        this.fetchHistorical()
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

    fetchHistorical = async () =>{
        if(this.state.firstVisit) return
        let results = await this.historical()
        let historical = [
            {
            name: this.state.currentFavorite,
            data: results.map((ticker, index) => [
            moment().subtract({[this.state.timeInterval]: TIME_UNITS - index}).valueOf(),
            ticker.USD
         ])
        }
     ]
        this.setState({historical})
    }

    historical = () => {
        let promises = []
        for(let units = TIME_UNITS; units>0; units--){
            promises.push(
                cc.priceHistorical(
                    this.state.currentFavorite,
                    ['USD'],
                    moment().subtract({[this.state.timeInterval]:units}).toDate()
                )
            )
        }
        return Promise.all(promises)
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
            prices:null,
            historical:null,
        }, () => {
            this.fetchPrices()
            this.fetchHistorical()
        })
        localStorage.setItem('cryptoVis', JSON.stringify({
            favorites: this.state.favorites,
            currentFavorite
        }))
    }

    setCurrentFavorite = (symbol) => {
        this.setState({
            currentFavorite: symbol,
            historical:null
        }, this.fetchHistorical)
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

    changeChartSelect = (value) => {
        this.setState({timeInterval: value, historical:null},this.fetchHistorical)
    }

    render(){
        return(
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}