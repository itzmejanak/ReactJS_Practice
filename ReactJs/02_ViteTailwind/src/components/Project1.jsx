import React from 'react';
import { useState } from 'react';

function Project1() {
  const [color, setColor] = useState("red");

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className="fixed bottom-0 w-full flex justify-center mb-4">
        <button
          className="px-4 py-2 mr-2 text-white"
          style={{ backgroundColor: 'red' }}
          onClick={() => setColor('red')}
        >
          Red
        </button>
        <button
          className="px-4 py-2 mr-2 text-white"
          style={{ backgroundColor: 'blue' }}
          onClick={() => setColor('blue')}
        >
          Blue
        </button>
        <button
          className="px-4 py-2 mr-2 text-white"
          style={{ backgroundColor: 'green' }}
          onClick={() => setColor('green')}
        >
          Green
        </button>
        <button
          className="px-4 py-2 text-white"
          style={{ backgroundColor: 'yellow' }}
          onClick={() => setColor('yellow')}
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default Project1;
