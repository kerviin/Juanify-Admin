import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'
import Menu from './components/Menu'
import Forms from './components/Forms'
import NewProduct from './components/NewProduct'

export default function App() {
  return (
    <Router>
      <Header/>
        <Menu/>
          <div>
            <Switch>
              <Route component={Content} exact={true} path="/"/>
              <Route component={Forms} exact={true} path="/forms"/>
              <Route component={NewProduct} exact={true} path="/newproduct"/>
            </Switch>
          </div>
        <Footer/>
    </Router>
  )
}
