import React from 'react';
import './SearchBar.css'

const sortBy_options = {
    'Best Matched': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviews': 'review_count'
}

export class SearchBar extends React.Component{
    render_sortBy_options(){
        return Object.keys(sortBy_options).map(opt => (<li key={sortBy_options[opt]}> {opt} </li>));
    }
    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.render_sortBy_options()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}
