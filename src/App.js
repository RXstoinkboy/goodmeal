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
      name: '',
      email: '',
      phone: '',
      message: '',
      submitForm: {},
      buttonDisabled: false
    }
  }
  handleChange =(date)=>{
    this.setState({date});
    console.log(this.state.date)
  }

  handleInputChange =e=>{
    const target = e.target;
    const value = e.target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })

    // add validation
  }

  handleSubmit =e=>{
    e.preventDefault();
    const day=`${this.state.date[0].getDate()}`;
    const month=( (this.state.date[0].getMonth())+1 < 10 ? `0${(this.state.date[0].getMonth())+1}` : `${(this.state.date[0].getMonth())+1}` );
    const year= `${1900 + this.state.date[0].getYear()}`;
    this.setState({
      buttonDisabled: true,
      submitForm: {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        date: `${year}-${month}-${day}`,
        message: this.state.message
      }
    }, ()=>{console.log(this.state.submitForm)})
    // a function to send data as an email to restaurant

    // still have to add some validation
    // disbale buton if there is no data filled in
    // add setTimeout to simulate sending message and add animation to button
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
    const setCurrentDate =()=> {
        const day=`${new Date().getDate()}`;
        const month=( (new Date().getMonth())+1 < 10 ? `0${(new Date().getMonth())+1}` : `${(new Date().getMonth())+1}` );
        const year= `${1900 + new Date().getYear()}`;
        this.setState({
            currentDate: `${year}-${month}-${day}`
        })
    }
    setCurrentDate();
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
                      handleInputChange={this.handleInputChange}
                        name={this.state.name}
                        email={this.state.email}
                        phone={this.state.phone}
                        message={this.state.message}
                      handleSubmit={this.handleSubmit}
                      buttonDisabled={this.state.buttonDisabled}
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