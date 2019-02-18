import React, {Component} from 'react';
import {render} from 'react-dom';
import {MapWrapper} from './ContactMap.style.js';

class ContactMap extends Component {
  constructor(props){
    super(props);
  }

  onScriptLoad =()=> {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options
    );
    this.props.onMapLoad(map)
  }

  componentDidMount(){
    if(!window.google){
      const scr = document.createElement('script');
      scr.type = 'text/javascript';
      scr.src =`https://maps.google.com/maps/api/js?key=AIzaSyDmrGP-sjeDWfqeD2AUJ8qCQPMmTtrDBFs`;

      const x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(scr, x);

      scr.addEventListener('load', e=>{
        this.onScriptLoad();
        console.log('item loaded')
      })
    }else{
      this.onScriptLoad()
    }                       

    
  }

  render() {
    return (            
        <div style={{ width: 500, height: 500 }} id={this.props.id} />
    );
  }
}

export default ContactMap;