import { useState } from 'react';

export default function InputComponent() { 
  const [inputText, setText] = useState('Helloo'); 

  function handleChange(a) { 
    setText(a.target.value); 
  } 

  return ( 
    <> 
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
    </> 
  ); 
} 