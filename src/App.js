// import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Heading from './components/Heading';
import Card from './components/Card';
import Btn from './components/Btn';
import ModeToggler from './components/ModeToggler';
import handleClick from './components/handleClick';
import Time from './components/Time';
import InputComponent from './components/InputComponent';
import RegisterForm from './components/RegisterForm';
import Homepage from './components/Homapage';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter';
import rooftops from './assets/images/cocobutter2.png';
import Sound from './components/Sound';
import Calculator from './components/Calculator';
import DessertsList from './components/DessertsList';
import Form from './components/Form';
import FeedbackForm from './components/FeedbackForm';
import RegistrationForm from './components/RegistrationForm';
import ThemeSwitcher from './components/ThemeSwitcher';
import UseState from './components/UseState';
import UseStateCounter from './components/UseStateCounter';
import Goals from './components/Goals';
import StateWithAComponent from './components/StateWithAComponent';
import UseEffectHook from './components/UseEffectHook';
import UseEffectClick from './components/UseEffectClick';
import UseEffectScreenSize from './components/UseEffectScreenSize';

import './App.css';
import {Routes, Route, Link} from 'react-router-dom'; //must import in Index.js and add broswerrouter//
import ReactPlayer from 'react-player';
import React from 'react'; 

function App() {
  const date= new Date()
  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
    {fruitName: 'orange', id: 5},
  ]);

  const abc = [
    {
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
  ];

  return (
    <div className="App">
      <div>
        <nav className="nav">
          <Link to="/" className="nav-item">Homepage2  </Link>
          <Link to="/about" className="nav-item">About Me3</Link>
          <Link to="/c" className="nav-item">Contact4</Link>
        </nav>
        <Routes>
          {/* path is the /xx after url to get to this content */}
          {/* exact path means it has to match exactly */}
          <Route exact path="/" element={<Homepage />} />;
          <Route path="/about" element={<AboutMe />} />;
          <Route path="/c" element={<Contact/>}/>;
        </Routes>
        <ThemeSwitcher/>
        <div>
          {/* first method to import an image */}
          <img height={200} src={rooftops} alt="cocobutter"/>
          {/* second method to import an image */}
          <img height={200} src={require('./assets/images/cocobutter3.png')} alt="cocobutter3"/>
        </div>
        <div>
          <h1 className='video'>React Player</h1>
          <ReactPlayer url={'https://www.youtube.com/watch?v=ysz5S6PUM-U'} playing={false} volume={1} controls/>
        </div>
        <Sound/>
        <Calculator/>
        
        <div className="Dessert">
          <h2>List of low calorie desserts:</h2>
          <DessertsList fgh={abc} />
        </div>

          <Header name="Anna" color="purple" />
          <Main greet="Howdy" />
          <Sidebar greet="Howdy" />
          <Heading name="Bob"/>
          <Heading name="Bobby"/>
          <Card h2="First card's h2" h3="First card's h3" />
          <Card h2="Second card's h2" h3="Second card's h3" />
          <Card h2="Third card's h2" h3="Third card's h3" />
          <Btn />
          <ModeToggler />
          <div className='fruits'>
            <h1>Where should the state go?</h1>
            <Fruits fruits={fruits}/>
            <FruitsCounter fruits={fruits}/>
          </div>
          <div>
            <button onClick={handleClick}>Guess the number between 1 and 3</button>
          </div>
          <Time message={date.toLocaleTimeString()} />
          <InputComponent/>
          <RegisterForm />
          <Form />
          <FeedbackForm/>
          <RegistrationForm/>
          <UseState/>
          <UseStateCounter/>
          <Goals/>
          <StateWithAComponent/>
          <UseEffectHook/>
          <UseEffectClick/>
          <UseEffectScreenSize/>
      </div>
    </div>
  );
}

export default App;
