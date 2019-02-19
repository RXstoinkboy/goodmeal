import React, {Component} from 'react';

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
      const source = document.createElement('script');
      source.type = 'text/javascript';
      source.src =`https://maps.google.com/maps/api/js?key=AIzaSyDmrGP-sjeDWfqeD2AUJ8qCQPMmTtrDBFs`;

      const x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(source, x);

      source.addEventListener('load', e=>{
        this.onScriptLoad();
        console.log('item loaded')
      })
    }else{
      this.onScriptLoad()
    }
  }

  render() {
    return (            
        <div style={{ width: '100%', height: '100%' }} id={this.props.id} />
    );
  }
}

export default ContactMap;