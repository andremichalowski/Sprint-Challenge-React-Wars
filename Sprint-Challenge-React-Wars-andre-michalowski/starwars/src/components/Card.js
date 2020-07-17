import React from 'react';

import StyledCard from './StyledCard';

const Card = (props) => {
  return (
    <div className="Card">
        <StyledCard>
            <h1> {props.person.name}</h1>
            <h2> Birth Year: {props.person.birth_year}</h2>
            <h2> Home: {props.person.homeworld}</h2>
            <h2> Height: {props.person.height}</h2>
            <h2> Mass: {props.person.mass}</h2>

        </StyledCard>
    </div>
  );
}

export default Card;
