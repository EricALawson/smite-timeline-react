import React, {useState} from 'react';
import './App.css';
import GodStats from '../GodStats/GodStats.js';
import TimelineSlider from '../TimelineSlider/TimelineSlider.js';
import StatBlock from '../../data_objects/StatBlock';
import StatContext from '../../contexts/StatContext.js';



// const GameTimeContext = React.createContext(0)
// const BuildContext = React.createContext({
//   god : 'Ares',
//   Build : [],
//   GoldAndExpModel : null
// })

function App() {


  return (
    <div className="App">
      <StatContext.Provider>
        { GodStats(0) }
        <TimelineSlider />
        { GodStats(1) }
      </StatContext.Provider>
    </div>
  );
}

export default App;
