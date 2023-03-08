// function declaration //
// function Heading(props) {
//   const heading = {
//     padding: '20px',
//     background: "grey",
//     border: '2px solid black',
//     fontSize: '40px'
//   }
//   return <h1 className="heading1" style={heading}>Hello {props.name}</h1>;

// }

// or function expressions //
// const Heading = function(props) {
//   const heading = {
//     padding: '20px',
//     background: "grey",
//     border: '2px solid black',
//     fontSize: '40px'
//   }

//   return <h1 className="heading1" style={heading}>Hello {props.name}</h1>;
// }

// or arrow functions ES6 //
const Heading = props => {
  const heading = {
    padding: '20px',
    background: "grey",
    border: '2px solid black',
    fontSize: '40px'
  }

  return <h1 className="heading1" style={heading}>Hello {props.name}</h1>;

  [10, 20 ,30].forEach(item => item * 10);


  // ternary expression instead of if else //
  let name = 'bob';
  name == 'bob' ? console.log("Hello, Bob") : console.log("Hello, Friend");
}

export default Heading;