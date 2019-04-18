import React from "react"
import PropTypes from "prop-types"
import { Accordion, Icon, Form, Button, Header, Image, Modal } from 'semantic-ui-react'

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
                        <Modal trigger={<Icon name='edit' />}>
                          <Modal.Header>Select a Photo</Modal.Header>
                          <Modal.Content >
                          {librarys.title}
                            <Modal.Description>
                              <Header>Default Profile Image</Header>
                              <p>We've found the following gravatar image associated with your e-mail address.</p>
                              <p>Is it okay to use this photo?</p>
                            </Modal.Description>
                          </Modal.Content>
                        </Modal>
                      {librarys.title}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                    Description: <br></br>
                    {librarys.desc}
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
