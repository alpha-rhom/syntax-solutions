import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class SearchFilter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			term: '',
			autoCompleteResults: [],
			itemSelected: {},
			showItemSelected: false
		}

			fetch('/search?q=' + this.state.term)
      .then(response => this.setState({ autoCompleteResults: response.librarys }))
  }

  getAutoCompleteResults(e){
    this.setState({
      term: e.target.value
    }, () => {
      fetch('/search?q=' + this.state.term)
        .then(response => this.setState({ autoCompleteResults: response.librarys }))
    });
  }

  render(){
    let autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
      return <div key={index}>
        <h2>{response.title}</h2>
        <p>{response.desc}</p>
      </div>
    });

    return (
      <div>
        <input ref={ (input) => { this.searchBar = input } } value={ this.state.term } onChange={ this.getAutoCompleteResults.bind(this) } type='text' placeholder='Search...' />
        { autoCompleteList }
      </div>
    )
  }
}


export default SearchFilter