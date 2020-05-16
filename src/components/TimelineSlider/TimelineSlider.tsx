import React from 'react';
import './TimelineSlider.css';

function TimelineSlider() {
    return (
        <div className="slidercontainer">
            <input type="range" min="0" max = "3600" id="time-slider"></input>
        </div>
    )
}

export default TimelineSlider;