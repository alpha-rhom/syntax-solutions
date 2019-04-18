import React from "react"
import PropTypes from "prop-types"

//data
import { allLibrarys } from '../data/librarys'

//components
import Card from "../Card"

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      librarys: []
    }
    this.getLibrarys()
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
    newLibrarys.push(library)
    this.setState({
      librarys: newLibrarys
    })
  }


  render () {

    const { activeIndex, librarys } = this.state
    const{ handleUpdate } = this

    return (
      <React.Fragment>
        {console.log(librarys)}
        <Card librarys={librarys} handleUpdate={handleUpdate}/>
      </React.Fragment>
    );
  }
}

export default MainPage
