import React from "react"
import PropTypes from "prop-types"
import { Accordion, Icon, Form, Button, Modal } from 'semantic-ui-react'

//components
import UpdateCard from "./UpdateCard"

class Card extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex: null,
      search: ''
    }
  }
    updateSearch = (event) => {
      this.setState({search: event.target.value.substr(0, 20)})
    }

  //Opens and closes the accordion
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render () {

    const { activeIndex } = this.state
    const { showEditMenu } = this

    let filteredCards = this.props.librarys.filter(
        (library) => {
          return library.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || library.desc.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        }
      )

    return (
      <React.Fragment>
        <div>
          Filter: <input type="text" value={this.state.search} onChange={this.updateSearch} placeholder="Search Syntaxes" />
        </div>
        <ul>
            {filteredCards.map((librarys, index)=>{
              return(
                <div>
                  <Accordion>
                    <Accordion.Title >
                      <Icon name='dropdown' active={activeIndex === index} index={index} onClick={this.handleClick}/>
                      <Icon name='trash alternate' onClick={() => {
                               this.props.handleDelete(librarys.id)}}/>
                      <UpdateCard handleUpdate={this.props.handleUpdate} libraryId={librarys.id}/>
                      Title: {librarys.title}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === index}>
                    Description: <br></br>
                    {librarys.desc} <br></br>
                    Markdown: <br></br>
                    {librarys.markdown}
                    </Accordion.Content>
                  </Accordion>
                </div>
              )
            })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Card
