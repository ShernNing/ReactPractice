// import React, { useState } from "react"

// function UseStateCounter() {
//   const [count, setCount] = useState(4)
//   const [theme, setTheme] = useState("black")

//   function decrementCount() {
//     setCount (prevCount => prevCount - 1)
//   }

//   function incrementCount() {
//     setCount (prevCount => prevCount + 1)
//   }

//   return (
//     <>
//       <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//       <span>{theme}</span>
//       <button onClick={incrementCount}>+</button>
//     </>
//   )
// }

// export default UseStateCounter;


import React, { useState } from "react"

function UseStateCounter() {
  const [state, setState] = useState({count: 4, theme: "blue"})
  const count = state.count
  const theme = state.theme

  function decrementCount() {
    setState (prevState => {
      return {...prevState, count: prevState.count - 1, theme: "green"}
    })
  }

  function incrementCount() {
    setState (prevState => {
      return {...prevState, count: prevState.count +1}
    })
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default UseStateCounter;