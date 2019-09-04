import React from 'react';

const Stock = props => (
    <div>
        <p>Name: {props.name}</p>
        <p>Open: {props.open}</p>
        <p>High: {props.high}</p>
        <p>Low: {props.low}</p>
        <p>Close: {props.close}</p>
        <p>Volume: {props.volume}</p>
    </div>
)

export default Stock;