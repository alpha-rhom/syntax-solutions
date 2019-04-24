import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"

class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <main className="site">
          <h1>UnauthenticatedApp</h1>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
