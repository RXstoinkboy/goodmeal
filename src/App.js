import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {PoseGroup} from 'react-pose';
import {RoutesContainer} from './Transition';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Recipes from './components/Recipes/Recipes';
import News from './components/News/News';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


const App = () => (
  <Route 
    render={({location})=> (
      <React.Fragment>
      <Navbar />
        <PoseGroup>
          <RoutesContainer key={location.key}>
            <Switch location={location}>
              <Route exact path='/' component={Hero} key='home'/>
              <Route path='/recipes' component={Recipes} key='recipes' />
              <Route path='/news' component={News} key='news'/>
              <Route path='/about' component={About} key='about' />
              <Route path='/contact' component={Contact} key='contact' />
            </Switch>
          </RoutesContainer>
        </PoseGroup>
      </React.Fragment>
    )}
  />
    
);

export default App;