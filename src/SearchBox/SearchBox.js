import React, { Component } from 'react';
import './SearchBox.css'

class SearchBox extends Component {
    constructor(props){
        super(props)
        this.state= {
            search:'',
            house: 'all'
        }
    }
    handleHouse = (e) => {
        // set state of house selection
        this.setState({
            house: e.target.value
        })
    }
    handleInput = (e) => {
        // set state of search box
        this.setState({
            search: e.target.value
        })
    }
    render() {
        
        return(
            <form className="search-box" 
                onSubmit={(event) => {
                event.preventDefault();
                const {house, search} = this.state;
                this.props.handleSearch(house, search)
                }}>
                <fieldset className="select-house">
                <label htmlFor="house">Select House</label>
                <select className="house" onChange={this.handleHouse}>
                    <option value='all'>All</option>
                    <option value='Gryffindor'>Gryffindor</option>
                    <option value='Ravenclaw'>Ravenclaw</option>
                    <option value='Slytherin'>Slytherin</option>
                    <option value='Hufflepuff'>Hufflepuff</option>
                </select>
                </fieldset>
                <fieldset className="input-search">
                    <label name="search" htmlFor="search">Potter Search (Leave empty to view all characters)</label>
                    <input type='text' name="search"  onChange={this.handleInput}></input>
                    <button type="submit">Search</button>
                </fieldset>
            </form>
        )
    }
}


export default SearchBox;