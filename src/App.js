import React from 'react';
import './App.css';
import DaysCompleted from './Components/DaysCompleted';
import Tile from "./Components/Tile";

function App() {
  const name = "Joe Appleton";
  const heading = <h1>Hello, {name}</h1>;

  const sum = (x,y) =>  x + y;
  return (
    <div className="App">
      <div>
        {heading}
        <h2> Yo {name} </h2>
        <h2>  What is the answer to 1 +1. Is it {sum(1,1)} ? </h2>
        <div>
            <Tile><DaysCompleted days={15}/></Tile>
        </div>
      </div>
    </div>
  );
}

export default App;
