import React from 'react';
import './App.css';
import GodStats from '../GodStats/GodStats.js';
import TimelineSlider from '../TimelineSlider/TimelineSlider.js';
import StatBlock from '../../data_objects/StatBlock';
import StatContext from '../../contexts/StatContext.js';
import ItemBuild from '../ItemBuild/ItemBuild.js';
import ItemSelector from '../ItemBuild/ItemSelector/ItemSelector';



// const GameTimeContext = React.createContext(0)
// const BuildContext = React.createContext({
//   god : 'Ares',
//   Build : [],
//   GoldAndExpModel : null
// })

function App() {
  const defaultStats = {
    gods : [
        new StatBlock({health : 400, power : 100 }),
        new StatBlock({health : 300, hp5 : 3})
    ]
  } 

  return (
    <div className="App">
      <StatContext.Provider value={defaultStats}>
        <GodStats goNum={0}></GodStats>
        <ItemBuild godNum={0}></ItemBuild>
        <TimelineSlider />
        <ItemBuild godNum={1}></ItemBuild>
        <GodStats godNum={1}></GodStats>
      </StatContext.Provider>
    </div>
  );
}

export default App;
