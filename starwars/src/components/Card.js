import React from 'react';
import axios from 'axios';

import StyledCard from './StyledCard';

const Planets = () => {

  const [planets, fetchPlanets] = useState([]);

  useEffect(() => {
      axios
      .get('https://swapi.co/api/planets')
      .then(res => {
          console.log(res)
          fetchPeople(res.data.results)
      })
      .catch(err => {
          console.log('No response from the server', err)
      })
  }, [])

return (
  {
      planets.map((planet, id) => {
      return(
          <Card key={id} planet={planet}/>
      )
      })
  }
  </div>
);
}



const Card = (props) => {
  return (
    <div className="Card">
        <StyledCard>
            <h1> {props.person.name}</h1>
            <h2> Birth Year: {props.person.birth_year}</h2>
            <h2> Home: {props.person.${planet}}</h2>
            <h2> Height: {props.person.height}</h2>
            <h2> Mass: {props.person.mass}</h2>
        </StyledCard>
    </div>
  );
}

export default Card;
