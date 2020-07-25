import React, {Component} from 'react';
import CharacterCard from '../CharacterCard/CharacterCard'
import './SearchResults.css'

class SearchResults extends Component {
    render() {
        const characters = this.props.results.map((result, i) => {
                return <CharacterCard key={i} 
                name={result.name} 
                role={result.role} 
                bloodStatus={result.bloodStatus} 
                house={result.house}/>
            })
        return (
            <div className="search-results">
                {characters}
            </div>
        )
    }
}

export default SearchResults;