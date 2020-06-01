import React from 'react';
import './App.css';
import GodStats from '../GodStats/GodStats';
import TimelineSlider from '../TimelineSlider/TimelineSlider';
import ItemBuild from '../ItemBuild/ItemBuild';

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
