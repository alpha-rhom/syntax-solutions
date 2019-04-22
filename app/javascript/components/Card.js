import React from "react"
import PropTypes from "prop-types"
import { Accordion, Icon, Input, Form, Button, Modal, Dropdown } from 'semantic-ui-react'

//components
import UpdateCard from "./UpdateCard"
import LikeUnlike from "./LikeUnlike"
import Comments from "./Comment"

class Card extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex: null,
      search: '',
      whichMap: false,
      currentUser: this.props.currentUser.id
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

  showMyCards = (e) => {
    this.state.whichMap === false ? this.setState({ whichMap: true }) : this.setState({ whichMap: false })
  }

  render () {
    const { activeIndex } = this.state
    const { showEditMenu } = this

    let filteredCards = this.props.librarys.filter(
        (library) => {
          return library.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || library.desc.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        }
      )

    let user_cards = this.props.librarys.filter(
      (library) => {
        return library.user_id === this.props.currentUser.id ? library : ''
      })

    return (
      <React.Fragment>
        <div className='search-bar'>
          <Input fluid icon={<Icon name='search' inverted circular link />} value={this.state.search} onChange={this.updateSearch} placeholder="Search Syntaxes" />
        </div>

        {this.state.whichMap === false &&
          <div className="container">
            <a className="ui blue image label" onClick={this.showMyCards}>Show My Cards</a>
          </div>
        }

        {this.state.whichMap &&
					<div className="container">
            <a className="ui blue image label" onClick={this.showMyCards}>Show All Cards</a>
          </div>
        }

        <ul className="accordions container">

        {this.state.whichMap === false &&
          <div>
            {filteredCards.map((librarys, index)=>{
              return(
                <div key={index}>
                  <Accordion>
										<div className="controls">
											<Icon name='trash alternate' 
												onClick={() => {
												this.props.handleDelete(librarys.id)}}
												/>

											{
												//Update Icon
												librarys.user_id === this.props.currentUser.id ?
												<UpdateCard 
													handleUpdate={this.props.handleUpdate} 
													libraryId={librarys.id}
													likes={librarys.likes}
													librarys={librarys}
													userId={librarys.user_id}
													/>
												: '' 
											}

											<span class="likes">Likes: {librarys.likes}</span>

											<LikeUnlike 
												handleUpdate={this.props.handleUpdate} 
												libraryId={librarys.id} 
												librarys={librarys}
												/>
										</div>
                    <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
                      <Icon name='dropdown' />
                      
											<h2>{librarys.title}</h2>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === index}>
                        Description: <br></br>
                        {librarys.desc} <br></br>
                        Markdown: <br></br>
                        {librarys.markdown}
                        <Comments />
                    </Accordion.Content>
                  </Accordion>
                </div>
              )
            })}
            </div>
        }

        {this.state.whichMap &&
          <div>
            {user_cards.map((librarys, index)=>{
              return(
                <div key={index} >
                  <Accordion>
										<div className="controls">
											<Icon name='trash alternate' 
												onClick={() => {
												this.props.handleDelete(librarys.id)}}
												/>

											{
												//Update Icon
												librarys.user_id === this.props.currentUser.id ?
												<UpdateCard 
													handleUpdate={this.props.handleUpdate} 
													libraryId={librarys.id}
													likes={librarys.likes}
													librarys={librarys}
													userId={librarys.user_id}
													/>
												: '' 
											}

											<span class="likes">Likes: {librarys.likes}</span>

											<LikeUnlike 
												handleUpdate={this.props.handleUpdate} 
												libraryId={librarys.id} 
												librarys={librarys}
												/>
										</div>
                    <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
                      <Icon name='dropdown' />
                      
											<h2>{librarys.title}</h2>
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
            </div>
        }
        </ul>
      </React.Fragment>
    );
  }
}

export default Card
