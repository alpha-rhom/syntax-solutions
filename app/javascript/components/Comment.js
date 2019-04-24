import React from "react"
import PropTypes from "prop-types"
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { allLibrarys } from "./data/librarys";
import moment from 'moment'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        body: '',
        library_id: this.props.librarys.id,
        user_id: this.props.currentUserId,
        created_at: 'Now'
      }
    }
  }

  handleChange = (event) => {
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  } 

  submitForm = () => {
    this.props.createComment(this.state.form)
  }
  
   

  render () {
    return (
      <React.Fragment>
      <Comment.Group>
          <Header as='h3' dividing>Comments</Header>
            { 
                this.props.librarys.comments.map((comment, index) => {
                    return(
                        <Comment>
                          <Comment.Content>
                            <Comment.Author as='a'>Matt</Comment.Author>
                            <Comment.Metadata>
                              <div>{moment(comment.created_at).format('h:mm:ss a, MMMM Do YYYY')
                                }</div>
                            </Comment.Metadata>
                          
                            <Comment.Text>{comment.body}</Comment.Text>
                          </Comment.Content>
                        </Comment>
                  )
                } 
              )
           
            } 

          <Form reply>
            <Form.Field>
              <label>Comment</label>
              <input 
                name="body"
                placeholder='Comment'
                onChange={this.handleChange.bind(this)}
              />
            </Form.Field>
            <Button 
              type='submit'
              icon='save outline'
              onClick={this.submitForm}
            />
          </Form>
            </Comment.Group>

      </React.Fragment>
    );
  }
}

export default Comments
