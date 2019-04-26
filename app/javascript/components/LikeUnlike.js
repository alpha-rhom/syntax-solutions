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

  componentDidMount() {
    let likeValues = [0]

    if (this.props.librarys.hasOwnProperty('user_likes')){

      let curUserLikeUn = this.props.librarys.user_likes.filter(userLike => {return userLike.user_id === this.props.currentUser.id})

      curUserLikeUn.map(
        (userLike, index) => {
        return likeValues.push(userLike.value)
        }
      )
    }
      
    let total = likeValues.reduce((partial_sum, a) => partial_sum + a)
    this.setState({likeTotal: total})
  }

  createLul = (likeValue) => {
    let value = likeValue
    let library_id = this.props.librarys.id
    let user_id = this.props.currentUser.id
    let userLikes = {value: value, user_id: user_id,  library_id:  library_id}
    this.props.createLikeUnlike(userLikes)
  }

  animateLul = (e) => {
    // check if correct icon was clicked
    if (e.target.className.includes('thumbs')) {
      let savedEvent = e.target

      savedEvent.classList.toggle('animating');

      setTimeout(() => {
        savedEvent.classList.toggle('animating');
      }, 1000); // same as CSS duration
    }
  }

  handleLikeUnlike = (newLike, likeValue) => {
    let title = this.props.librarys.title
    let desc = this.props.librarys.desc
    let markdown = this.props.librarys.markdown
    let comments = this.props.librarys.comments
    let likes = newLike
    let user_id = this.props.librarys.user_id
    let user_like = []
    let id = this.props.libraryId
    
    let library = {id: id, title: title, desc: desc,  markdown:  markdown, likes: likes, comments: comments, user_id: user_id, user_like: user_like}
    this.createLul(likeValue)
    this.props.handleUpdate(library)
  }


  handleLike = (e) => {
    this.animateLul(e)

    let likeValues = [0]

    if (this.props.librarys.hasOwnProperty('user_likes')){

      let curUserLikeUn = this.props.librarys.user_likes.filter(userLike => {return userLike.user_id === this.props.currentUser.id})

      curUserLikeUn.map(
        (userLike, index) => {
          return likeValues.push(userLike.value)
        }
      )
    }
      
    let total = likeValues.reduce((partial_sum, a) => partial_sum + a)
    
    if (total < 1) {
      if (this.state.likeTotal < 1){
        this.setState({likeTotal: this.state.likeTotal + 1})
      } else {
        ''
      }

      if (this.state.likeTotal < 1) {
        let currentLike = typeof this.props.librarys.likes === 'number' ? parseInt(this.props.librarys.likes) : 0
        let newLike = currentLike + 1
        let likeValue = 1
        this.handleLikeUnlike(newLike, likeValue)
        this.setState({ likedIcon: true })
      } 
    }
    
  }

  handleDislike = (e) => {
    this.animateLul(e)

    let likeValues = [0]

    if (this.props.librarys.hasOwnProperty('user_likes')){

      let curUserLikeUn = this.props.librarys.user_likes.filter(userLike => {return userLike.user_id === this.props.currentUser.id})

      curUserLikeUn.map(
        (userLike, index) => {
        return likeValues.push(userLike.value)
        }
      )
    }
      
    let total = likeValues.reduce((partial_sum, a) => partial_sum + a)
    
    if (total > -1) {
      if (this.state.likeTotal > -1){
        //changes likeTotal state to what it currently is -1
        this.setState({likeTotal: this.state.likeTotal - 1})
      } else {
        ''
      }
      // newLike adds one to the current Like total; likeValue sets the value for the userLike 
      if (this.state.likeTotal >  -1) {
        let currentLike = typeof this.props.librarys.likes === 'number' ? parseInt(this.props.librarys.likes) : 0
        let newLike = currentLike - 1
        let likeValue = -1
        this.handleLikeUnlike(newLike, likeValue)
        this.setState({ dislikedIcon: true })
      } 
    }
  }

  render () {
    const { likedIcon, dislikedIcon, likeTotal } = this.state
    return (
      <React.Fragment>
        <Icon className={likeTotal === 1 ? 'thumbsup liked' : 'thumbsup'} name={likeTotal === 1 ? 'thumbs up' : 'thumbs up outline'} onClick={this.handleLike}/>
        <span className="likes">{this.props.librarys.likes}</span>
        <Icon className={likeTotal === -1 ? 'thumbsdown unliked' : 'thumbsdown'} name={likeTotal === -1 ? 'thumbs down' : 'thumbs down outline'} onClick={this.handleDislike} />
      </React.Fragment>
    );
  }
}

export default LikeUnlike
