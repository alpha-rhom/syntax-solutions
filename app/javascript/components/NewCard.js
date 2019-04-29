import React from "react"
import PropTypes from "prop-types"
import { Form, Button, Modal, Icon, TextArea } from 'semantic-ui-react'
import AceEditor from "react-ace";
import brace from "brace";
import 'brace/mode/javascript';
import 'brace/theme/github';

class NewCard extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      form: {
        title: '',
        desc: '',
        markdown: '',
        comments: [],
        user_id: this.props.currentUser.id
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
    this.setState({form: {...this.state.form, markdown: '',},}) 
  }

  handleAce = (newValue) => {
    let { form } = this.state
    form.markdown = newValue
    this.setState({ form: form })
  }

  render () {

    const { submitForm } = this
    
    return (
      <React.Fragment>
          <Modal trigger={<Icon className='addcard' circular inverted name='plus' />}>
          <Modal.Header>New Card</Modal.Header>
          <Modal.Content >
              
            <Form>
                <Form.Field>
                  <label>Title</label>
                  <input  name="title" autoFocus placeholder='Title' onChange={this.handleChange.bind(this)} />
              </Form.Field>
              
                <Form.Field>
                  <label>Description</label>
                  <input  name="desc" placeholder='Description' onChange={this.handleChange.bind(this)} />
              </Form.Field>
              
                <Form.Field>
                <label>Code Snippet</label>
                <AceEditor
                  value={`${this.state.form.markdown}`}
                  name="Code Snippet"
                  placeholder='Code Snippet'
                  showGutter={true}
                  theme="github"
                  highlightActiveLine={false}
                  onChange={this.handleAce} />
              </Form.Field>
            </Form>
            <Form>
								<Button animated='vertical' onClick={submitForm}>
									<Button.Content hidden>
										<Icon name='arrow right' />
									</Button.Content>
									<Button.Content visible>
										Submit
									</Button.Content>
								</Button>
              </Form> 
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}
 
export default NewCard
