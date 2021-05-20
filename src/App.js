import React from 'react';
import Input from './components/Input';
// import Button from './components/Button';
import ResultsList from './components/ResultsList';

const App = ({ searchValue, onSearchChange, results }) => {
  return (
    <div>
      <Input value={searchValue} onChange={onSearchChange} placeholder="Type something..."></Input>
      {/* <Button onClick={() => console.log('click')}>Search</Button> */}
      <ResultsList values={results}></ResultsList>
    </div>
  );
}

export default App;
