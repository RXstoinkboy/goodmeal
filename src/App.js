import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {PoseGroup} from 'react-pose';
import {RoutesContainer} from './Transition';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Recipes from './components/Recipes/Recipes';
import News from './components/News/News';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      color: window.location.pathname == '/contact' ? 'black' : 'white'
    }
  }

  handleColor =(e)=>{
    this.setState({
      color: 'white'
    }, ()=>{
      this.setState({
        color: window.location.pathname == '/contact' ? 'black' : 'white'
      })
    }) 
    
}
    render(){
      return(
      <React.Fragment>
      <Navbar color={this.state.color} handleColor={this.handleColor}/>
          <PoseGroup>
            <RoutesContainer key={window.location.pathname}>
              <Switch location={window.location}>
                <Route exact path='/' render={(props)=><Hero color={this.state.color} handleColor={this.handleColor}/>} key='home' />
                <Route path='/recipes' component={Recipes} key='recipes' />
                <Route path='/news' component={News} key='news'/>
                <Route path='/about' component={About} key='about' />
                <Route path='/contact' component={Contact} key='contact' />
              </Switch>
            </RoutesContainer>
          </PoseGroup>
      </React.Fragment>
      )
    }
}

export default App;