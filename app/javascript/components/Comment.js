import React from "react"
import PropTypes from "prop-types"
import { Button, Comment, Form, Header, Icon, TextArea } from 'semantic-ui-react'
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
        created_at: []
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
    this.setState({form: {...this.state.form, body: '',},})
  }
 
  render () {
    return (
      <React.Fragment>

      <Comment.Group size='large'>

          <Header as='h3' dividing>Comments</Header>
            { 
                this.props.librarys.comments.map((comment, index) => {
                    return(
                        <Comment key={index}>
                          <Comment.Content>
                            <Comment.Author as='span'>Matt</Comment.Author>
                            <Comment.Metadata>
                              {
                                comment.created_at.length !== 0 ?
                                <time dateTime={moment(comment.created_at).format('YYYY-MM-DD HH:mm:ss')} title={moment(comment.created_at).format('dddd, MMMM Do YYYY, h:mma')}>{moment(comment.created_at).fromNow()}</time>
                                : 'Now'
                                
                              }
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
							<TextArea name="body" placeholder='' value={this.state.form.body} onChange={this.handleChange.bind(this)} />
            </Form.Field>
						<Button animated='vertical' onClick={this.submitForm}>
    				  <Button.Content hidden>
								<Icon name='reply' />
							</Button.Content>
							<Button.Content visible>
								Reply
							</Button.Content>
						</Button>
          </Form>
        </Comment.Group>

      </React.Fragment>
    );
  }
}

export default Comments
