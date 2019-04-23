import React from "react"
import PropTypes from "prop-types"
import { Form, Button, Modal, Icon } from 'semantic-ui-react'
import AceEditor from "react-ace";
import brace from "brace";

class NewCard extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      form: {
        title: '',
        desc: '',
        markdown: ''
      }
    }
  }

  //update state when typing
  handleChange = (event) => {
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  submitForm = () => {
    this.props.createLibrary(this.state.form)
  }

  render () {

    const { submitForm } = this
    
    return (
      <React.Fragment>
        <Modal trigger={<Icon name='gem' />}>
          <Modal.Header>New Card</Modal.Header>
          <Modal.Content >
              <Form>
                <Form.Field>
                  <label>Title</label>
                  <input  name="title" placeholder='Title' onChange={this.handleChange.bind(this)} />
                </Form.Field>
                <Form.Field>
                  <label>Description</label>
                  <input  name="desc" placeholder='Description' onChange={this.handleChange.bind(this)} />
                </Form.Field>
                <Form.Field>
                <label>Markdown</label>
                <textarea name="markdown" placeholder='Markdown' onChange={this.handleChange.bind(this)}>
                <AceEditor
                  showGutter={false}
                  theme="github"
                  highlightActiveLine={false}
                  onChange={this.handleChange.bind(this)}/>
                </textarea>
                </Form.Field>
                <Button type='submit' onClick={submitForm}>Submit</Button>
              </Form>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}

export default NewCard
