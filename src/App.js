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
      color: window.location.pathname == '/contact' ? 'black' : 'white',
      date: new Date(),
      currentDate: '',
    }
  }
  handleChange =(date)=>{
    this.setState({date});
    console.log(this.state.date)
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

  componentDidMount(){
    const pickDate =()=> {
        const day=`${new Date().getDate()}`;
        const month=( (new Date().getMonth())+1 < 10 ? `0${(new Date().getMonth())+1}` : `${(new Date().getMonth())+1}` );
        const year= `${1900 + new Date().getYear()}`;
        this.setState({
            currentDate: `${year}-${month}-${day}`
        }, ()=>{
            console.log(this.state.currentDate)
        })
    }
    pickDate();
  }

    render(){
      return(
      <React.Fragment>
      <Navbar color={this.state.color} handleColor={this.handleColor}/>
          <PoseGroup>
            <RoutesContainer key={window.location.pathname}>
              <Switch location={window.location}>
                <Route 
                  exact path='/' 
                  render={(props)=>
                    <Hero 
                      color={this.state.color} 
                      handleColor={this.handleColor}
                      currentDate={this.state.date}
                      handleChange={this.handleChange}
                    />
                  } 
                  key='home' />
                <Route path='/recipes' component={Recipes} key='recipes' />
                <Route path='/news' component={News} key='news'/>
                <Route path='/about' component={About} key='about' />
                <Route 
                  path='/contact' 
                  render={(props)=>
                    <Contact 
                      currentDate={this.state.date}
                      handleChange={this.handleChange}
                    />
                  } 
                  key='contact' />
              </Switch>
            </RoutesContainer>
          </PoseGroup>
      </React.Fragment>
      )
    }
}

export default App;