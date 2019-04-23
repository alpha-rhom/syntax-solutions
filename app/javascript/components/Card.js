import React from "react"
import PropTypes from "prop-types"
import { Accordion, Icon, Input, Form, Button, Modal, Dropdown } from 'semantic-ui-react'
import AceEditor from "react-ace";
import brace from "brace";
import 'brace/mode/javascript';
import 'brace/theme/github';

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

    // Sorts cards by most popular
    if (sortCards === "popular") {
      var filteredCards = librarys.sort((a, b) => b.likes - a.likes).filter(
        (library) => {
          return library.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || library.desc.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })
    // Sorts cards user's cards
    } else if (sortCards === "myCards") {
      var filteredCards = librarys.filter(
      (library) => {
        return library.user_id === this.props.currentUser.id ? library : ''
      })
    // Sorts cards by newest
    } else if (sortCards === "newest"){
      var filteredCards = librarys.sort((a, b) => b.id - a.id).filter(
        (library) => {
          return library.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || library.desc.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })
    // Sorts cards by oldest
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


        <div className="container center">
          <div className="ui buttons">
            <button className={ this.state.sortCards === "newest" ? "ui button active" : "ui button" } onClick={this.toggleNewestCards}>Newest</button>
            <button className={ this.state.sortCards === "oldest" ? "ui button active" : "ui button" } onClick={this.toggleOldestCards}>Oldest</button>
            <button className={ this.state.sortCards === "popular" ? "ui button active" : "ui button" } onClick={this.togglePopularCards}>Most Popular</button>
            <button className={ this.state.sortCards === "myCards" ? "ui button active" : "ui button" } onClick={this.toggleMyCards}>My Cards</button>
          </div>
        </div>
      
        <ul className="accordions container">
            {filteredCards.map((librarys, index)=>{
              return(
                <div key={index}>
                  <Accordion>
										<div className="controls">
                      <i className="btn-trash" onClick={() => {this.props.handleDelete(librarys.id)}}>
                        <svg className="oscar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 52">
                          <g className="hands">
                            <path className="hand left" d="M24.88 19.84l3-1.85s1.18-.61 1.55 0S31.09 19 31.36 19.4s2.2 2.24.4 2a6.09 6.09 0 0 1-2.83-1l-1.93.6Z" />
                            <path className="hand right" d="M7.88 19.84 5.11 18S4 17.38 3.68 18 2.13 19 1.89 19.4s-2 2.24-.37 2a5.35 5.35 0 0 0 2.61-1l1.79.6Z" />
                          </g>
                          <g className="head-wrap">
                            <path className="head" d="M16 5.58c6.2.27 10.76 3.45 11.43 7.8 0 .21 0 2.32 0 2.88 0 3.7-5.72 5-11.88 4.9-5.33-.09-9.44-1.44-11-4.85a10.67 10.67 0 0 1-.77-2.88C3.87 9.43 9.82 5.3 16 5.58Z" />
                            <path className="hair" d="M25.05 10.12c4.12.91 4.18 1.41 4.18 1.41l-1.07-1.41h2.7l-.49-.22-2.21-1-3.74-.42L27.74 8l-1.25-.83H30.4L26.84 6H22.61L18 5.51 2.61 6H1L2 7.14H1L3.27 8 1 8.52l4.25.42L0 11H4.27l8.89-5.52 7.28 1.07h.75Z" />
                            <path className="mouth" d="M8.52 15c3.39-.58 14 0 14 0s1.25.94 1.25 1.6a1.47 1.47 0 0 1-.4 1l-7.61.85-5.59-.85-1.22-.3S5.13 15.59 8.52 15Z" />
                            <path className="tongue" d="M12.35 16.32h7.27l.14.36a2.07 2.07 0 0 0-.28.53c-.1.33-1.11.39-1.11.39H13.68a6.77 6.77 0 0 1-.7-.14.7.7 0 0 1-.36-.25l-.27-.54Z" />
                            <path className="eye" d="M10.52 9.17c1.58-.39 3.45.19 3.69 1.55s-1.3 2.41-2.94 2.7-3.16-.22-3.4-1.58S9 9.56 10.52 9.17Z" />
                            <path className="eye" d="M21.27 9.12c1.62.17 3.18 1.36 2.94 2.72s-2.05 1.82-3.69 1.53-2.89-1.29-2.65-2.65S19.65 9 21.27 9.12Z" />
                            <circle className="pupil" cx="11.4" cy="11.62" r="1.5" />
                            <circle className="pupil" cx="20.4" cy="11.62" r="1.5" />
                            <path className="brow" d="M15.09 10.12C11.92 8.54 10.49 9 10.49 9l-1.85.35L7.22 10.71l-.81 1.12" />
                            <path className="brow" d="M16.75 10.12C19.55 8.54 20.81 9 20.81 9l1.63.35 1.25 1.32.72 1.12" />
                            <g className="lid">
                              <line x1="2.4" y1="4.62" x2="29.4" y2="4.62"/>
                              <path d="M13.5 4.62V1h5.15V4.62" />
                            </g>
                          </g>
                          <g className="trash">
                            <path d="M4.23 20.9H28v30H4.23Z" />
                            <line x1="23.4" y1="28.62" x2="23.4" y2="43.89" />
                            <line x1="16.4" y1="28.62" x2="16.4" y2="43.89" />
                            <line x1="9.4" y1="28.62" x2="9.4" y2="43.89" />
                          </g>
                        </svg>
                      </i>

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
                      
											<p>{librarys.desc}</p>

											<AceEditor
												mode="javascript"
												theme="github"
												fontSize={14}
												showPrintMargin={false}
												showGutter={true}
												highlightActiveLine={false}
												readOnly={true}
												value={librarys.markdown}
												setOptions={{
												showLineNumbers: true,
												tabSize: 2,
												}}
												editorProps={{
													$blockScrolling: Infinity
												}}
												/>
											<Comments
                          comments={librarys.comments}
                          librarys={librarys}
                          libraryId={librarys.id}
                          createComment={this.props.createComment}
                          currentUserId={this.props.currentUser.id}
                        />
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
