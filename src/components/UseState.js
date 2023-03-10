// not recommended way of updating state object

// import {useState} from "react";

// export default function UseState() {
//     const [greeting, setGreeting] = useState ({greet: "Hello, world!"});
//     console.log(greeting, setGreeting);

//     function ert() {
//         setGreeting({greet: "Hello, world wide web!"});
//     }

//     return (
//         <div>
//             <h1>{greeting.greet}</h1>
//             <button onClick={ert}>Update greeting</button>
//         </div>
//     )
// }


// Correct way of updating state object
// import { useState } from "react";

// export default function UseState() {
//     const [greeting, setGreeting] = useState({greet: "Hello, world!"});
//     console.log(greeting, setGreeting);

//     function ert() {
//         const tyu = {...greeting};
//         tyu.greet = "Hello, World wide web!";
//         setGreeting(tyu);
//     }

//     return (
//         <div>
//             <h1>{greeting.greet}</h1>
//             <button onClick={ert}>Updated Greeting</button>
//         </div>
//     )
// }


// updating state object using arrow functions
import { useState } from "react";

export default function UseState() {
    const [greeting, setGreeting] = useState(
        {greet: "Hello", place: "World!"}
    )
    console.log(greeting, setGreeting);

    function ert() {
        setGreeting(rty => 
            {return {...rty, greet:"Helooo", place: "World Wide Web"}})
    }

    return (
        <div>
            <h1>{greeting.greet}, {greeting.place}</h1>
            <button onClick={ert}>Update Greeting</button>
        </div>
    )
}