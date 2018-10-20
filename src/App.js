import React from 'react'
import { Router, Link, Head, withSiteData } from 'react-static'
import { loadLanguages } from 'reprism'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import 'nprogress/nprogress.css'
import javascript from 'reprism/languages/javascript'
import './app.css'

loadLanguages(javascript)

const App = withSiteData(({ title, name }) => (
  <Router>
    <React.Fragment>
      <Head titleTemplate={`${title} - %s`} defaultTitle={title} />
      <header className="header">
        <h1>{name}</h1>
        <nav>
          <Link exact to="/">
            Home
          </Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <div className="content">
        <Routes />
      </div>
    </React.Fragment>
  </Router>
))

export default hot(module)(App)
