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

  render () {

    const { activeIndex } = this.state
    const{ librarys } = this.state

    return (
      <React.Fragment>
        {console.log(librarys)}
        <Card librarys={librarys} />
      </React.Fragment>
    );
  }
}

export default MainPage
