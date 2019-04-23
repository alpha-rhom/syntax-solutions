import React from "react"
import PropTypes from "prop-types"
import { Icon } from 'semantic-ui-react'
class LikeUnlike extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        title: this.props.librarys.title,
        desc: this.props.librarys.desc,
        markdown: this.props.librarys.markdown,
        likes: this.props.librarys.likes
      }
    }
  }

  handleLikeUnlike = (newLike, e) => {
    let title = this.props.librarys.title
    let desc = this.props.librarys.desc
    let markdown = this.props.librarys.markdown
    let likes = newLike
    let id = this.props.libraryId
    let library = {id: id, title: title, desc: desc,  markdown:  markdown, likes: likes}
    this.props.handleUpdate(library)
    
    // animation

    if (e.target.className.includes('thumbs')) {
      let savedEvent = e.target

      savedEvent.classList.toggle('animating');

      setTimeout(() => {
        savedEvent.classList.toggle('animating');
      }, 1000); // same as CSS duration
    }
  }

  handleLike = (e) => {
    let currentLike = typeof this.props.librarys.likes === 'number' ? this.props.librarys.likes : 0
    let newLike = currentLike + 1
    this.handleLikeUnlike(newLike, e)
  }

  handleDislike = (e) => {
    let currentLike = typeof this.props.librarys.likes === 'number' ? this.props.librarys.likes : 0
    let newLike = currentLike - 1
    this.handleLikeUnlike(newLike, e)
  }

  render () {
    return (
      <React.Fragment>
        <Icon className='thumbsup' name='thumbs up outline' onClick={this.handleLike}/><Icon className='thumbsdown' name='thumbs down outline' onClick={this.handleDislike} />
      </React.Fragment>
    );
  }
}

export default LikeUnlike
