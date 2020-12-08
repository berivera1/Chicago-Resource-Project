import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import About from './pages/About'
import Resources from './pages/Resources'
import Header from './components/header'
import Logo from './components/logo.js'
import Footer from "./components/Footer";
function App() {
    return (
      <BrowserRouter>
        <Header />
        <Logo />
        <Switch>
          <Route path="/resources">
              <Resources />
          </Route>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/">
              <HomePage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
      
    );
}
export default App;
