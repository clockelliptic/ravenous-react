import React from 'react';
import './SearchBar.css'


export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            'term':'',
            'location':'',
            'sortBy':'best_match',
        }

        this.sortBy_options = {
            'Best Matched': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviews': 'review_count'
        }
        this.handle_termChange = this.handle_termChange.bind(this)
        this.handle_locationChange = this.handle_locationChange.bind(this)
        this.handle_submitSearch = this.handle_submitSearch.bind(this)
    }

    get_sortBy_class(opt){
        return (opt===this.state.sortBy) ? 'active' : '';
    }

    render_sortBy_options(){
        return Object.keys(this.sortBy_options).map(opt => {
            const sortByOption = this.sortBy_options[opt];
            return (
                <li
                    onClick={this.handle_sortBy_change.bind(this, sortByOption)}
                    className={this.get_sortBy_class(sortByOption)}
                    key={sortByOption}
                > {opt} </li>
                );
        })
    }

    handle_sortBy_change(opt){
        this.setState({'sortBy': opt})
    }

    handle_termChange(e){
        this.setState({'term':e.target.value})
    }

    handle_locationChange(e){
        this.setState({'location':e.target.value})
    }

    handle_submitSearch(e){
        const [term, location, sortBy] = [this.state.term, this.state.location, this.state.sortBy]
        this.props.searchYelp(term, location, sortBy)
        e.preventDefault()
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
                    <input onChange={this.handle_termChange} placeholder="Search Businesses" />
                    <input onChange={this.handle_locationChange} placeholder="Where?" />
                </div>
                <div onClick={this.handle_submitSearch} className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}
