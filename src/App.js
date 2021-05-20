import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <Input value={inputValue} onChange={setInputValue} placeholder="Type something..."></Input>
      <Button onClick={() => console.log('click')}>Search</Button>
    </div>
  );
}

export default App;
