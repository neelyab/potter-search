import React, {Component} from 'react';
import SearchBox from './SearchBox/SearchBox';
import SearchResults from './SearchResults/SearchResults'
import config from './config'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      results:[],
      error: null
    }
  }
  handleSearch = (house, search) => {
    // format url according to search and selections
    let url
    if (house === 'all' && search.length === 0) {
      url = `${config.URL}characters?key=${config.API_KEY}`
    }
    else if (house !== 'all' && search.length > 0) {
      url = `${config.URL}characters?key=${config.API_KEY}&house=${house}&name=${search}`  
    } 
    else {
      url = `${config.URL}characters?key=${config.API_KEY}&house=${house}`
    }
    fetch(url)
    .then(res => {
      if(!res.ok){
        throw new Error()
      }
      return res.json()
    })
    .then(response => {
      console.log(response)
      if (response.length === 0 ){
        // perform a partial search for name
        this.performPartialSearch(house, search)
      }else {
        this.setState({
          results: response
        })
      }
    })
    .catch(err => {
      this.setState({
        error: err
      })
    })

  }
  performPartialSearch = (house, search) => {
    // when no results are present in response, perform a search on array of all characters
    fetch(`${config.URL}characters?key=${config.API_KEY}`)
    .then(res => {
      if(!res.ok){
        throw new Error()
      }
      return res.json()
    })
    .then(response => {
     let results = [];
     if (house === 'all') {
       // filter characters by search term only
      results = response.filter(char => {
           return char.name.toLowerCase().includes(search.toLowerCase())
          })
     } else {
      // filter characters by house and search term
       results = response.filter(char => { 
         return char.name.toLowerCase().includes(search.toLowerCase()) && char.house === house
     })
    }
    this.setState({
      results
    })
    })
    .catch(err => {
      this.setState({
        error: err
      })
    })

  }
  render() {
    return (
      <main className='App'>
        <h1>Potter Search</h1>
        <SearchBox handleSearch={this.handleSearch} />
        <p>{this.state.error && this.state.error}</p>
        <SearchResults results = {this.state.results} />

      </main>
    );
  }
 
}

export default App;

