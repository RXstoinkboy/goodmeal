import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';
import {ContactWrapper} from './ContactStyle';
import {render} from 'react-dom';
import InfoWindow from './ContactMapInfo';

const Contact =props=> {
    const createInfoWindow =(e, map)=>{
        const infoWindow = new window.google.maps.InfoWindow({
            content: '<div id="infoWindow" />',
            position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
        })
        infoWindow.addListener('domready', e=>{
            render(<InfoWindow />, document.getElementById('infoWindow'))
        })
        infoWindow.open(map)
    }
    return (
        <div style={{
            background: 'white', 
            width: '100%', 
            height: '100%', 
            position: 'absolute', 
            display: 'flex', 
            justifyContent:'center', 
            alignItems:'center'}}>
            <ContactWrapper>
                <ContactInfo />
                <ContactForm 
                    currentDate={props.currentDate}
                    handleChange={props.handleChange}
                    handleColor={props.handleColor}
                    handleInputChange={props.handleInputChange}
                        name={props.name}
                        email={props.email}
                        phone={props.phone}
                        message={props.message}
                    handleSubmit={props.handleSubmit}
                    buttonDisabled={props.buttonDisabled}
                    nameVal={props.nameVal}
                    phoneVal={props.phoneVal}
                    emailVal={props.emailVal}
                    messageVal={props.messageVal}
                    handleCurrentValidation={props.handleCurrentValidation}/>
                <ContactMap
                    // these are all necessary props needed to turn on the map
                    id='myMap'
                    options={{
                        center: { lat: 40.740478, lng: -73.984955 },
                        zoom: 16
                    }}
                    onMapLoad={map=>{
                        // place a position marker
                        const marker = new window.google.maps.Marker({
                            position: { lat: 40.740478, lng: -73.984955 },
                            map: map,
                            title: 'Hello map'
                        });
                        // create a clickable popup InfoWindow on top of the marker
                        marker.addListener('click', e => {
                            this.createInfoWindow(e, map)
                        })
                    }}/>
            </ContactWrapper>
        </div>
);
};

export default Contact;