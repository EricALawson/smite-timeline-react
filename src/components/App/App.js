import React from 'react';
import './App.css';
import GodStats from '../GodStats/GodStats.js';
import TimelineSlider from '../TimelineSlider/TimelineSlider.js';
import ItemBuild from '../ItemBuild/ItemBuild.js';
import ItemSelector from '../ItemBuild/ItemSelector/ItemSelector';




// const GameTimeContext = React.createContext(0)
// const BuildContext = React.createContext({
//   god : 'Ares',
//   Build : [],
//   GoldAndExpModel : null
// })

function App() {
  return (
    <div className="App">
        <GodStats godNum={0}></GodStats>
        <ItemBuild godNum={0}></ItemBuild>
        <TimelineSlider />
        <ItemBuild godNum={1}></ItemBuild>
        <GodStats godNum={1}></GodStats>
    </div>
  );
}

export default App;
