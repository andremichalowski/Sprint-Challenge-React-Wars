import React, { useEffect } from 'react';

import Card from './Card';
import axios from 'axios';

const CardContainer = () => {

    useEffect(() => {
        axios.get('https://swapi.co/documentation#people')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log('No response from the server', err)
        })
    })
  
  // Try to think through what state you'll need for this app before starting. 
  // Then build out the state properties here.

  // Fetch characters from the star wars api in an effect hook. 
  // Remember, anytime you have a side effect in a component, 
  // you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="CardContainer">
      <h1 className="Header">React Wars</h1>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardContainer;
