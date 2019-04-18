import React from "react"
import PropTypes from "prop-types"
import { Accordion, Icon } from 'semantic-ui-react'

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

    return (
      <React.Fragment>
        <ul>
            {this.props.librarys.map((librarys)=>{
              return(
                <div>
                  <Accordion>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                      <Icon name='dropdown' />
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
