import React from 'react';
import './App.css';
import GodStats from '../GodStats/GodStats';
import TimelineSlider from '../TimelineSlider/TimelineSlider';
import buildIdentifier from "../../redux/buildIdentifier";
import ItemPicker from '../ItemBuild/ItemPicker/ItemPicker';

function App() {
  return (
    <div className="App">
        <GodStats buildIdentifier={buildIdentifier.left}></GodStats>
        <TimelineSlider />
        <GodStats buildIdentifier={buildIdentifier.right}></GodStats>
        <ItemPicker></ItemPicker>
    </div>
  );
}

export default App;
