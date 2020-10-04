import React from 'react'
const cc = require('cryptocompare')
const API_KEY = process.env.REACT_APP_CRYPTO_KEY
cc.setApiKey(API_KEY)

export const Context = React.createContext()

export class StateManager extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'Dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavourites: this.confirmFavourites


        }
    }

    componentDidMount = () => {
        this.fetchCoins()
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data
        console.log(coinList.Data)
        this.setState({coinList})
    }
    confirmFavourites = () => {
        this.setState({
            firstVisit:false,
            page: 'Dashboard'
        })
        localStorage.setItem('cryptoVis', JSON.stringify({
            test: 'hello'
        }))
    }

    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoVis'));
        if(!cryptoDashData){
            return{page:'Settings', firstVisit:true}
        }
        return {}
    }
    setPage = page => this.setState({page})

    render(){
        return(
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}