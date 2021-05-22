import React from 'react';
import Input from '../../components/Input';
import ResultsList from '../../components/ResultsList';
import './HomePage.scss';

const HomePage = ({ searchValue, onSearchChange, results }) => {
  return (
    <div className="home-page">
      <Input value={searchValue} onChange={onSearchChange} placeholder="Type here..."></Input>
      {/* <Button onClick={() => console.log('click')}>Search</Button> */}
      <div className="home-page-results__container">
        {
          searchValue.length > 0 ?
            <ResultsList values={results}></ResultsList> :
            <span className="home-page-results__empty">Type something in</span>
        }
      </div>
    </div>
  );
}

export default HomePage;
