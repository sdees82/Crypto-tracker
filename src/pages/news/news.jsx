import React from 'react';
import CardList from "../../components/cardList/cardList.component"
import "./news.style.css";

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles : []
        }
    }

    componentDidMount(){
        fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=f1e214227344835a85f8dda04ec637cbf8d5c4d6c8346d3a6ce90b59717c026f")
        .then(response => response.json())
        .then(data => {
            if(data.Message === "News list successfully returned"){
                this.setState({articles: data.Data.slice(0,30)});
            }
        });
    }
    render() { 
        return ( 
            <div className="container">
                <h1>NEWS</h1>
                <CardList articles={this.state.articles}/>
            </div>
         );
    }
}
 
export default News;