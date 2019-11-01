import React from 'react';
import './App.css';
import {BusinessList} from '../BusinessList/BusinessList'
import {SearchBar} from '../SearchBar/SearchBar'
import {Yelp} from '../../until/Yelp'



export class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    console.log(term, location, sortBy)

    Yelp.search(term, location, sortBy)
      .then((businesses) => {this.setState({businesses:businesses}) });
  }

  get businesses(){
    return (this.state.businesses)?this.state.businesses:[]
  }

  render() {
    return (
      <div className="App">
        <h1>DELISH</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
    </div>
    );
  }
}
