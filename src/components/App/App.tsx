import React from 'react';
import './App.css';
import GodStats from '../GodStats/GodStats';
import TimelineSlider from '../TimelineSlider/TimelineSlider';
import ItemBuild from '../ItemBuild/ItemBuild';
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
        <GodStats buildIdentifier={'left'}></GodStats>
        <ItemBuild buildIdentifier={'left'}></ItemBuild>
        <TimelineSlider />
        <ItemBuild buildIdentifier={'right'}></ItemBuild>
        <GodStats buildIdentifier={'right'}></GodStats>
    </div>
  );
}

export default App;
