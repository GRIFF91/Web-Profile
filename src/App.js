import React, { Component } from 'react';
import './App.css';

import Header from "./components/header/header";
import NavBar from "./components/navBar/navBar";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
