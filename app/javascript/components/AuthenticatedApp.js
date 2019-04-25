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
        <Header />
<<<<<<< HEAD
        <Router>
          <Route exact to="/home" render={() => (
                <MainPage {...this.props} />
          )}/>
        </Router>
=======

        <main className="site">
          <Router>
            <Route exact to="/home" render={() => (
                  <MainPage {...this.props} />
            )}/>
          </Router>
        </main>
>>>>>>> 38b2c29b2da96e4694289ab6d2558f06d627de42
        <Footer />
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
