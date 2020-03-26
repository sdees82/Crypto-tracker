import React from 'react';
import CryptoCardList from "../../components/cryptoCardList/cryptoCardList.component";
import Loader from 'react-loader-spinner';
import "./prices.style.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Prices extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            coins:[],
            update: "",
         }
    }
    componentDidMount(){
        fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=f1e214227344835a85f8dda04ec637cbf8d5c4d6c8346d3a6ce90b59717c026f")
        .then(response => response.json())
        .then(data => {
            if(data.Message === "Success"){
                this.setState({coins: data.Data, updated: data.Data[0].DISPLAY.USD.LASTUPDATE});
            }
        });
    }
    render() { 
        return ( 
            <div className="container">
                <h1>PRICES</h1>
                {
                    this.state.coins.length === 0 ? <Loader
                    type="ThreeDots"
                    color="#2b2d32"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
           
                 /> : (
                    <React.Fragment>
                    <p>Last updated: {this.state.updated}</p>
                    <CryptoCardList coins={this.state.coins}/>
                </React.Fragment>
                 )
                }
            </div>
         );
    }
}
 
export default Prices;