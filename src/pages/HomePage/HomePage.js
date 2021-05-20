import React from 'react';
import Input from '../../components/Input';
import ResultsList from '../../components/ResultsList';

const HomePage = ({ searchValue, onSearchChange, results }) => {
  return (
    <div>
      <Input value={searchValue} onChange={onSearchChange} placeholder="Type something..."></Input>
      {/* <Button onClick={() => console.log('click')}>Search</Button> */}
      <ResultsList values={results}></ResultsList>
    </div>
  );
}

export default HomePage;
