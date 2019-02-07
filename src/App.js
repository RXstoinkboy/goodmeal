import React, { Component } from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero>
          {this.props.children}
        </Hero>
      </div>
    );
  }
}

export default App;
