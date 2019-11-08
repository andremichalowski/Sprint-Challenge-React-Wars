import React, { useEffect, useState } from 'react';

import Card from './Card';
import axios from 'axios';



const CardContainer = () => {

    const [people, fetchPeople] = useState([]);

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people')
        .then(response => {
            // console.log(res);
            fetchPeople(response.data.results)

        })
        .catch(err => {
            console.log('No response from the server', err)
        })
    }, [])

  return (
    <div className="CardContainer">
    {
        people.map((person, id) => {
        return(
            <Card key={id} person={person}/>
        )
        })
    }
    </div>
  );
}

export default CardContainer;
