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
      },
      likeTotal: []
    }
  }

  componentDidMount(){
    console.log(this.prevState)
    this.setState((prevState) => ({ likeTotal: prevState.likeTotal }))
  }

  handleLikeUnlike = (newLike) => {
    let title = this.props.librarys.title
    let desc = this.props.librarys.desc
    let markdown = this.props.librarys.markdown
    let likes = newLike
    let id = this.props.libraryId
    let library = {id: id, title: title, desc: desc,  markdown:  markdown, likes: likes}
    this.props.handleUpdate(library)
  }

  handleLike = () => {
      this.setState({likeTotal: this.state.likeTotal + 1})
      if (this.state.likeTotal < 1) {
      let currentLike = typeof this.props.librarys.likes === 'number' ? this.props.librarys.likes : 0
      let newLike = currentLike + 1
      this.handleLikeUnlike(newLike)
      } else {
        console.log('hello')
      }
  }

  handleDislike = () => {
    let currentLike = typeof this.props.librarys.likes === 'number' ? this.props.librarys.likes : 0
    let newLike = currentLike - 1
    this.handleLikeUnlike(newLike)
  }

  render () {
    return (
      <React.Fragment>
        <Icon name='thumbs up outline' onClick={this.handleLike}/> <Icon name='thumbs down outline' onClick={this.handleDislike} />
      </React.Fragment>
    );
  }
}

export default LikeUnlike
