// on click (shows in console) //
function Btn() {
  const clickHandler = () => console.log('Hello')

  return (
    <button onClick={clickHandler}>Click Me</button>
  )
}

// on hover //
// function Btn() {
//   const clickHandler = () => console.log('Hello')

//   return (
//     <button onMouseOver={clickHandler}>Click Me</button>
//   )
// }

// Handling events using separate function expressions
// function Btn() {
//   const fourthExample = () => console.log('fourth');

//   return (
//     <div className="fourthExample">
//       <button onClick={fourthExample}>Using a seperate function expression</button>
//     </div>
//   )
// }


export default Btn;