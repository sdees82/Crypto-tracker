import React from 'react';
import "./crypto-card.style.css";

const CryptoCard = ({imageUrl, fullName, price, marketCap, internal, change}) => {
    return ( 
        <div className="crypto-card">
        <img src={`https://cryptocompare.com${imageUrl}`} alt=""/>
        <p>{fullName}</p>
        <p>{internal}</p>
        <h2>Price: {price.replace(" ", "")}</h2>
        <p className="market"><span>Mkt. Cap: {marketCap.replace(" ","")}</span></p>
        <p className="market">Chg. 24H: <span className={Number(change) < 0 ? "red" : "green"}>{change}%</span></p>
        </div>
     );
}
 
export default CryptoCard;