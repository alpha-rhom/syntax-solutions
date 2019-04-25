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
        likes: this.props.librarys.likes,
        likedIcon: false,
        dislikedIcon: false
      },
      likeTotal: 0
    }
  }



  handleLikeUnlike = (newLike, e) => {
    let title = this.props.librarys.title
    let desc = this.props.librarys.desc
    let markdown = this.props.librarys.markdown
    let comments = this.props.librarys.comments
    let likes = newLike
    let user_id = this.props.librarys.user_id
    let id = this.props.libraryId
    let library = {id: id, title: title, desc: desc,  markdown:  markdown, likes: likes, comments: comments, user_id: user_id}
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

    this.state.likeTotal < 1 ? this.setState({likeTotal: this.state.likeTotal + 1}) : ''
      if (this.state.likeTotal < 1) {
        let currentLike = typeof this.props.librarys.likes === 'number' ? parseInt(this.props.librarys.likes) : 0
        let newLike = currentLike + 1
        this.handleLikeUnlike(newLike, e)
        this.setState({ likedIcon: true })
      } 

  }

  handleDislike = (e) => {
    this.state.likeTotal > -1 ? this.setState({likeTotal: this.state.likeTotal - 1}) : ''

    if (this.state.likeTotal > - 1) {
      let currentLike = typeof this.props.librarys.likes === 'number' ? parseInt(this.props.librarys.likes) : 0
      let newLike = currentLike - 1
      this.handleLikeUnlike(newLike, e)
      this.setState({ dislikedIcon: true })
    } 
  }

  render () {
    const { likedIcon, dislikedIcon } = this.state
    return (
      <React.Fragment>
        { likedIcon ? 
          <Icon className='thumbsup' name='thumbs up' onClick={this.handleLike}/> : 
          <Icon className='thumbsup' name='thumbs up outline' onClick={this.handleLike}/>
        }
          <span className="likes">{this.props.librarys.likes}</span>
        { dislikedIcon ? 
          <Icon className='thumbsdown' name='thumbs down' onClick={this.handleDislike} /> : 
          <Icon className='thumbsdown' name='thumbs down outline' onClick={this.handleDislike} />
        }
      </React.Fragment>
    );
  }
}

export default LikeUnlike
