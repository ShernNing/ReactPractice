import React, { useState, useEffect } from 'react';

const UseEffectHook = () => {
  const [toggle, setToggle] = useState(false)

  const clickHandler = () => {
    setToggle(!toggle);
  }

  useEffect (() => {
    document.title = toggle ? "Helloo there" : "Using the useEffect Hook" 
    //document.title dynmamically updates the text showing in the tab of browser
  }, [toggle])

  return (
    <div>
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>Toggle Message</button>
      {toggle && <h2>Welcome to little lemon</h2>}
    </div>
  );
}

export default UseEffectHook;

