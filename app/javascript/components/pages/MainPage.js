import React from "react"
import PropTypes from "prop-types"

//data
import { allLibrarys } from '../data/librarys'

//components
import Card from "../Card"
import NewCard from "../NewCard"

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      librarys: []
    }
    this.getLibrarys()
  }

  createLibrary = (library) => {
    return fetch('http://localhost:3000/libraries', {
      body: JSON.stringify({library}),
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST"
    })
    .then((response) => {
        this.updateLibrary(library)
      })
  }
  
  //Updates state with librarys
  getLibrarys = ()=>{
    allLibrarys()
    .then((librarys)=>{
      this.setState({ librarys })
    })
    .catch((error) => {
      this.setState({
        error
      })
    })
  }

  //Edits cards
  handleUpdate = (library) => {
    fetch(`http://localhost:3000/libraries/${library.id}`,
    {
      method: 'PUT',
      body: JSON.stringify({library: library}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.updateLibrary(library)
      })
  }
  
  updateLibrary(library){
    let newLibrarys = this.state.librarys.filter((f) => f.id !== library.id)
    newLibrarys.unshift(library)
    this.setState({
      librarys: newLibrarys
    })
    document.elementFromPoint(1, 1).click()
  }
  //Delete cards
  handleDelete = (id) => {
    fetch(`http://localhost:3000/libraries/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      this.deleteLibrary(id);
    })
  }
  
  deleteLibrary = (id) => {
    const newLibrarys = this.state.librarys.filter((library) => library.id !== id)
    this.setState({
      librarys: newLibrarys
    })
  }

  createComment = (comment) => {
    return fetch('http://localhost:3000/comments', {
      body: JSON.stringify({comment}),  // <- we need to stringify the json for fetch
      headers: {  // <- We specify that we're sending JSON, and expect JSON back
        'Content-Type': 'application/json'
      },
      method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
    })
    .then((response) => {
        
        this.updateComment(comment)
      })
  }

  updateComment(comment){
    let updateIndex = this.state.librarys.findIndex((library) => library.id === comment.library_id)
    let newState = this.state.librarys
    newState[updateIndex].comments.push(comment)
    this.setState({
      librarys: newState
    })
  }

  render () {
    const { activeIndex, librarys } = this.state
    const{ handleUpdate, handleDelete, createLibrary } = this
    
    return (
      <React.Fragment>
        <Card
            librarys={librarys}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            currentUser={this.props.current_user}
            createComment={this.createComment}
        />
        <NewCard createLibrary={createLibrary} />
      </React.Fragment>
    );
  }
}

export default MainPage
