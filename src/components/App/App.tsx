import React from 'react';
import './App.css';
import GodStats from '../GodStats/GodStats';
import TimelineSlider from '../TimelineSlider/TimelineSlider';
import ItemBuild from '../ItemBuild/ItemBuild';
import { buildIdentifier } from '../../redux/store';
import ItemPicker from '../ItemBuild/ItemPicker/ItemPicker';

function App() {
  return (
    <div className="App">
        <GodStats buildIdentifier={buildIdentifier.left}></GodStats>
        <ItemBuild buildIdentifier={buildIdentifier.left}></ItemBuild>
        <TimelineSlider />
        <ItemBuild buildIdentifier={buildIdentifier.right}></ItemBuild>
        <GodStats buildIdentifier={buildIdentifier.right}></GodStats>
        <ItemPicker></ItemPicker>
    </div>
  );
}

export default App;
