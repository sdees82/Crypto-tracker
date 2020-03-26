import React from 'react';
import Card from "../card/card.component";
import "./cardList.style.css";

const CardList = ({articles}) => {
    return (
        <React.Fragment>
        {
           
            articles.map((articles, index) =>{
                return(
                    <Card key={index} 
                    url={articles.url}
                    title={articles.title}
                    imageurl={articles.imageurl}
                    body={articles.body}
                    info={articles.source_info.name}
                    author={articles.source_info.img}
                    />
                )
            })
        }
        </React.Fragment>
      );
}
 
export default CardList;