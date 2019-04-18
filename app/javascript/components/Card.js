import React from "react"
import PropTypes from "prop-types"
import { Accordion, Icon, Form, Button, Modal } from 'semantic-ui-react'

//components
import UpdateCard from "./UpdateCard"

class Card extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex: null
    }
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

    return (
      <React.Fragment>
        <ul>
            {this.props.librarys.map((librarys)=>{
              return(
                <div>
                  <Accordion>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                      <Icon name='dropdown' />
                      <UpdateCard handleUpdate={this.props.handleUpdate} libraryId={librarys.id}/>
                      Title: {librarys.title}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
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
