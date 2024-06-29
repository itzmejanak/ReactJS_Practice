import React, { useState } from 'react';
import InputField from './components/Project3';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <div style={{height:"150%", width:"50%", backgroundColor:"red"}}>
      <InputField value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
}

export default App;
