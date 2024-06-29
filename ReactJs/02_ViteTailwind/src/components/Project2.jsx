import React, { useState } from 'react';

const charValues = 'abcdefghijklmnopqrstuvwxyz'.split('');
const numbers = '0123456789'.split('');

function generateCharacterString(length, includeNumbers, includeChars) {
  const characterPool = [];
  
  if (includeNumbers) {
    characterPool.push(...numbers);
  }
  
  if (includeChars) {
    characterPool.push(...charValues);
  }

  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    result += characterPool[randomIndex];
  }

  return result;
}

function Project2() {
  const [length, setLength] = useState(17);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeChars, setIncludeChars] = useState(true);
  const [output, setOutput] = useState('');

  const handleGenerate = () => {
    const generatedString = generateCharacterString(length, includeNumbers, includeChars);
    setOutput(generatedString);
  };

  return (
    <div className='w-full h-screen p-10 flex justify-center items-center bg-slate-600 text-cyan-50'>
      <div className='w-1/2 bg-slate-800 rounded-lg shadow-lg p-6'>
        <div className='bg-neutral-800 flex items-center justify-between p-2 rounded-md mb-4'>
          <input 
            className='bg-white flex-grow rounded-l-md p-2 text-black' 
            type="text" 
            value={output} 
            readOnly 
          />
          <button 
            className='bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-700 transition-colors duration-300'
            onClick={() => { navigator.clipboard.writeText(output); }}
          >
            Copy
          </button>
        </div>
        <div className='flex items-center mb-4'>
          <input 
            type="range" 
            min="0" 
            max="17" 
            value={length} 
            step="1" 
            onChange={(e) => setLength(Number(e.target.value))}
            className='flex-grow mr-4'
          />
          <h2 className='text-lg'>Length ({length})</h2>
        </div>
        <div className='flex items-center justify-between mb-4'>
          <form className='flex items-center space-x-4'>
            <label htmlFor="option1" className='flex items-center space-x-2'>
              <input 
                type="checkbox" 
                id="option1" 
                name="options" 
                checked={includeNumbers} 
                onChange={(e) => setIncludeNumbers(e.target.checked)} 
                className='h-4 w-4'
              />
              <span>Number</span>
            </label>
            <label htmlFor="option2" className='flex items-center space-x-2'>
              <input 
                type="checkbox" 
                id="option2" 
                name="options" 
                checked={includeChars} 
                onChange={(e) => setIncludeChars(e.target.checked)} 
                className='h-4 w-4'
              />
              <span>Character</span>
            </label>
          </form>
        </div>
        <button 
          className='bg-green-500 text-white p-2 rounded-md hover:bg-green-700 transition-colors duration-300'
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default Project2;
