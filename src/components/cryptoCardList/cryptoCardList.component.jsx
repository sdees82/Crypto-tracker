import React from 'react';
import CryptoCard from "../cryptocard/crypto-card.component";
import "./cryptoCardList.style.css";

const CryptoCardList = ({coins}) => {
    return (
        <div className="card-container">
        {
           
            coins.map((coins, index) =>{
                return(

                        <CryptoCard key={index} 
                        imageUrl={coins.CoinInfo.ImageUrl}
                        fullName={coins.CoinInfo.FullName}
                        price={coins.DISPLAY.USD.PRICE}
                        marketCap={coins.DISPLAY.USD.MKTCAP}
                        internal={coins.CoinInfo.Internal}
                        change={coins.DISPLAY.USD.CHANGEPCT24HOUR}
                    />
                )
            })
        }
        </div>
      );
}
 
export default CryptoCardList;