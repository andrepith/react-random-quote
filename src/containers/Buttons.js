import React from 'react';

const Buttons = (props) => {
    const tweet = `https://twitter.com/intent/tweet?text=${props.quotes} ~ ${props.authors}`
    return (
        <div>
            <div className="button">
                <div className="new-quote">
                    <button 
                        onClick={props.handleClick}
                    >
                        More Quote
                    </button>
                </div>
                <div className="tweet-quote">
                    <a className='material-icons' href={tweet} target="_blank">
                        <button>
                            Tweet
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Buttons;