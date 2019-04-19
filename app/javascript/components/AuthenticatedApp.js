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
import Header from './Header'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
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
