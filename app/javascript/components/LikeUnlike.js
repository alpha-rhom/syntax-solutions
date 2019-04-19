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
        markdown: this.props.librarys.markdown
      },
      libraryId: this.props.libraryId
    }
  }

  handleLikeUnlike = (newLike) => {
    console.log(newLike)
    let title = this.state.form.title
    let desc = this.state.form.desc
    let markdown = this.state.form.markdown
    let likes = newLike
    let id = this.state.libraryId
    let library = {id: id, title: title, desc: desc,  markdown:  markdown, likes: likes}
    this.props.handleUpdate(library)
  }

  handleLike = () => {
    let newLike = this.props.librarys.likes + 1
    this.handleLikeUnlike(newLike)
  }

  handleDislike = () => {
    let newLike = this.props.librarys.likes - 1
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
