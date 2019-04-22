import React from "react"
import PropTypes from "prop-types"
import { Button, Comment, Form, Header } from 'semantic-ui-react'

class Comments extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Comment.Group>
            <Header as='h3' dividing>
              Comments
            </Header>

            <Comment>
              <Comment.Content>
                <Comment.Author as='a'>Matt</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>How artistic!</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>

            <Form reply>
              <Form.TextArea />
              <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
        </Comment.Group>
      </React.Fragment>
    );
  }
}

export default Comments