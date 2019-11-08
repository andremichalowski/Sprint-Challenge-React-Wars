import React from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import StyledCard from './components/StyledCard';

const App = () => {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StyledCard>
        <CardContainer />
      </StyledCard>
    </div>
  );
}

export default App;
