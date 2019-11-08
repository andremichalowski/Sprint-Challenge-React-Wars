import React, { useEffect, useState } from 'react';

import Card from './Card';
import axios from 'axios';



const CardContainer = () => {

    const [people, fetchPeople] = useState([]);

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people')
        .then(res => {
            console.log(res)
            fetchPeople(res.data.results)
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


useEffect(() => {
  axios
  .get('https://swapi.co/api/planets')
  .then(res => {
      // console.log(res)
      fetchPeople(res.data.results)
  })
  .catch(err => {
      console.log('No response from the server', err)
  })
}, [])