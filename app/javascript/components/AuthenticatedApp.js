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
import Footer from './Footer'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
				<Header current_user={this.props.current_user} />
        <main className="site">
          <Router>
            <Route exact to="/home" render={() => (
              <MainPage {...this.props} />
            )}/>
          </Router>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
