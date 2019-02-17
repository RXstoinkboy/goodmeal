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
      buttonDisabled: true
    }
  }
  handleChange =(date)=>{
    this.setState({date: date[0]});
  }
  handleCurrentValidation=()=>{
    // patterns
    const namePattern = /[abcdefghijklmnopqrstuvwxyz]+/;
    const emailPattern = /[^@\s]+@[^@\s]+\.[^@\s]+/;
    const messagePattern = /\w+/;
    function phonePattern(str) {
      // accepted formats
          // 555-555-5555			
          // (555)555-5555		
          // (555) 555-5555		
          // 555 555 5555			
          // 5555555555				
          // 1 555 555 5555		
        
        const pattern1 = /^\d{3}\-\d{3}\-\d{4}$/;
        const pattern2 = /^1*\(\d{3}\)\d{3}\-\d{4}$/;
        const pattern3 = /^(1\s)*\(\d{3}\)\s\d{3}\-\d{4}$/;
        const pattern4 = /^\d{3}\s\d{3}\s\d{4}$/;
        const pattern5 = /^\d{10}$/;
        const pattern6 = /^1*(\s|\-)\d{3}(\s|\-)\d{3}(\s|\-)\d{4}$/;
        
        if(pattern1.test(str) || pattern2.test(str) || pattern3.test(str) || pattern4.test(str) || pattern5.test(str) || pattern6.test(str)){
           return true
           }else{
             return false;
          }
    }

      let nameCheck = namePattern.test(this.state.name) ? true : false;
      let phoneCheck = phonePattern(this.state.phone) ? true : false;
      let emailCheck = emailPattern.test(this.state.email) ? true : false;
      let messageCheck = messagePattern.test(this.state.message) ? true : false;

      if(nameCheck && phoneCheck && emailCheck && messageCheck){
        console.log('fajnie')
      }

  }

  handleInputChange =e=>{
    const target = e.target;
    const value = e.target.value;
    const name = target.name;
    this.setState({
      [name]: value
    }, ()=>{this.handleCurrentValidation()})

    // add validation
  }

  handleSubmit =e=>{
    e.preventDefault();
    const day=`${this.state.date.getDate()}`;
    const month=( (this.state.date.getMonth())+1 < 10 ? `0${(this.state.date.getMonth())+1}` : `${(this.state.date.getMonth())+1}` );
    const year= `${1900 + this.state.date.getYear()}`;

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
    })
  }

  componentDidMount(){
    const day=`${this.state.date.getDate()}`;
    const month=( (this.state.date.getMonth())+1 < 10 ? `0${(this.state.date.getMonth())+1}` : `${(this.state.date.getMonth())+1}` );
    const year= `${1900 + this.state.date.getYear()}`;
    this.setState({
      date: new Date(),
      currentDate: this.state.date,
      submitForm: {
        date: `${year}-${month}-${day}`,
      }
    })
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