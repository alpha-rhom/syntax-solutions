import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

//Components
import MainPage from './pages/MainPage'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Route exact to="/home" render={() => (
                <MainPage {...this.props} />
          )}/>
        </Router>
        
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
