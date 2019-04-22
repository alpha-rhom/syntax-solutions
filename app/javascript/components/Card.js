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
      currentUser: this.props.currentUser.id,
      sortCards: "newest"
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
    
    toggleMyCards = (e) => {
      this.setState({ sortCards: "myCards" })
    }
    
    togglePopularCards = (e) => {
      this.setState({ sortCards: "popular" })
    }

    toggleNewestCards = (e) => {
      this.setState({ sortCards: "newest" })
    }

    toggleOldestCards = (e) => {
      this.setState({ sortCards: "oldest" })
    }

  render () {
    const { activeIndex, sortCards } = this.state
    const { showEditMenu } = this
    const { librarys } = this.props

    // Alters the definition of filteredcards based on the user sorting cards

    // Sorts cards by most popular first
    if (sortCards === "popular") {
      var filteredCards = librarys.sort((a, b) => b.likes - a.likes).filter(
        (library) => {
          return library.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || library.desc.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })
    // Sorts cards by newest first
    } else if (sortCards === "myCards") {
      var filteredCards = librarys.filter(
      (library) => {
        return library.user_id === this.props.currentUser.id ? library : ''
      })
    } else if (sortCards === "newest"){
      var filteredCards = librarys.sort((a, b) => b.id - a.id).filter(
        (library) => {
          return library.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || library.desc.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })
    } else if (sortCards === "oldest") {
      var filteredCards = librarys.sort((a, b) => a.id - b.id).filter(
        (library) => {
          return library.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || library.desc.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })
    }

    return (
      <React.Fragment>
        <div className='search-bar'>
          <Input fluid icon={<Icon name='search' inverted circular link />} value={this.state.search} onChange={this.updateSearch} placeholder="Search Syntaxes" />
        </div>

        <div className="ui buttons">
          <button className="ui button" onClick={this.toggleMyCards}>My Cards</button>
          <button className="ui button" onClick={this.togglePopularCards}>Most Popular</button>
          <button className="ui button" onClick={this.toggleNewestCards}>Newest</button>
          <button className="ui button" onClick={this.toggleOldestCards}>Oldest</button>
        </div>
      
        <ul className="accordions container">
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

											<span className="likes">Likes: {librarys.likes}</span>

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
        </ul>
      </React.Fragment>
    );
  }
}

export default Card
