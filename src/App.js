import React from 'react';
import './App.css';
import Form from './components/Form';
import Stock from './components/Stock';

const API_KEY = '40LLFQL4DSFPATA1';
// let d = new Date();
// const DATE = (d.getFullYear() + '-0' + d.getMonth() + '-0' + d.getDate()).toString();

class App extends React.Component {

  state = {
    name: undefined,
    open: undefined,
    high: undefined,
    low: undefined,
    close: undefined,
    volume: undefined,
    error: undefined
  }

  getStock = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const api_call = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${name}&apikey=${API_KEY}`);

    const data = await api_call.json();
    console.log(data);
    const input = data['Time Series (Daily)']['2019-08-30'];

    if (name) {
      this.setState({
        name: data['Meta Data']['2. Symbol'],
        open: input['1. open'],
        high: input['2. high'],
        low: input['3. low'],
        close: input['4. close'],
        volume: input['5. volume']
      })
    } else {
      this.setState({ error: "Please enter a name." });
    }
  }
  render() {
    return (
      <div>
        <Form getStock={this.getStock} />
        <Stock
          name={this.state.name}
          open={this.state.open}
          high={this.state.high}
          low={this.state.low}
          close={this.state.close}
          volume={this.state.volume}
        />
      </div>
    );
  }
}

export default App;

