import React from "react"
import PropTypes from "prop-types"
import { Form, Button, Modal, Icon } from 'semantic-ui-react'

class UpdateCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleEdit = this.handleEdit.bind(this)
    this.state = {
      form: {
        title: this.props.librarys.title,
        desc: this.props.librarys.desc,
        markdown: this.props.librarys.markdown,
        likes: this.props.likes
      },
      libraryId: this.props.libraryId
    }
  }

  handleChange(event){
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  handleEdit(){
    let title = this.state.form.title
    let desc = this.state.form.desc
    let markdown = this.state.form.markdown
    let id = this.state.libraryId
    let likes = this.state.form.likes
    let userId = this.props.userId
    let library = {id: id, title: title, desc: desc,  markdown:  markdown, likes: likes, user_id: userId}
    this.props.handleUpdate(library)
  }

  render () {

    const { title, desc, markdown } = this.state.form

    return (
      <React.Fragment>
        <Modal trigger={<Icon name='edit' />} >
          <Modal.Header>Update Card</Modal.Header>
          <Modal.Content >
              <Form>
                <Form.Field>
                  <label>Title</label>
                  <input
                      name="title" 
                      placeholder='Title' 
                      value={title} 
                      onChange={this.handleChange.bind(this)} 
                  />
                </Form.Field>
                <Form.Field>
                  <label>Description</label>
                  <input
                      name="desc"
                      placeholder='Description'
                      value={desc}
                      onChange={this.handleChange.bind(this)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Markdown</label>
                  <input
                      name="markdown"
                      placeholder='Markdown'
                      value={markdown}
                      onChange={this.handleChange.bind(this)}
                  />
                </Form.Field>
                <Button type='submit' onClick={this.handleEdit}>Submit</Button>
              </Form>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}

export default UpdateCard
