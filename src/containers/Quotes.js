import React, { Component } from 'react';
import axios from 'axios';

import Buttons from './Buttons';
class Quotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: '',
            authors: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios
            .get('http://quotes.stormconsultancy.co.uk/quotes.json')
            .then((res) => {
                const data = res.data[Math.floor(Math.random()*res.data.length-1)];
                this.setState({
                    quotes: data.quote,
                    authors: data.author
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleClick() {
        this.componentDidMount();
    }

    render() {
        return (
            <div className="container">
                <div className="quote-box">
                    <p className="quote-box__text">
                        {this.state.quotes}
                    </p>
                    <p className="quote-box__author">
                        {this.state.authors}
                    </p>
                    <Buttons 
                        handleClick={this.handleClick}
                        quotes={this.state.quotes}
                        authors={this.state.authors}
                    />
                </div>
            </div>
        )
    }
}

export default Quotes