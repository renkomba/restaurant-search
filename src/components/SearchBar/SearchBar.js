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

        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption) {
        return this.state.sortBy === sortByOption ? 'active' : '';
    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption });
    }
    
    handleTermChange(e) {
        let term = e.target.value;
        this.setState({ term: term });
    }

    handleLocationChange(e) {
        let location = e.target.value;
        this.setState({ location: location });
    }

    handleSearch(e) {
        this.props.searchYelp( Object.values(this.state) );
        e.preventDefault();
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
                    <input
                        placeholder="Search Businesses"
                        onChange={this.handleTermChange} />
                    <input
                        placeholder="Where?"
                        onChange={this.handleLocationChange} />
                </div>
                <div 
                    className="SearchBar-submit"
                    onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;