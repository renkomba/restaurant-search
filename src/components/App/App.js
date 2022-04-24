import React from 'react';
// import ReactDOM from 'react-dom'
// import logo from '../../logo.svg';
import './App.css';
import { BusinessList } from '../BusinessList/BusinessList';
import { SearchBar } from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

const placeholderBusiness = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};
// let businesses = [business, business, business, business, business, business];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [placeholderBusiness] };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp([term, location, sortBy]) {
    Yelp.search(term, location, sortBy)
      .then( businesses => this.setState({ businesses: businesses}) );

    console.log(`Search Yelp for ${term} restaurants in the ${location} area sorted by ${sortBy}...`);
    console.log(`Current State: ${Object.entries(this.state.businesses[0])}`);
  }

  render() {
    return (
      <div className='App'>
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;