import React from "react";
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };

        // this.handleSortByChange = this.handleSortByChange.bind(this);
    }

    getSortByClass(sortByOption) {
        return this.state.sortBy === sortByOption ? 'active' : '';
    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption });
    }

    renderSortByOptions() {
        let sortByOptionsList = Object.keys(this.sortByOptions).map( 
            sortByOption => <li 
                key={this.sortByOptions[sortByOption]}
                className={this.getSortByClass(this.sortByOptions[sortByOption])}
                onClick={this.handleSortByChange.bind(this, this.sortByOptions[sortByOption])}
            >{sortByOption}</li>
        );

        return sortByOptionsList;
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
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

export default SearchBar;