import React from 'react';
import './TimelineSlider.css';
import { connect } from 'react-redux';
import {Slider} from 'antd';
import { createAction } from '@reduxjs/toolkit';
import { SliderValue } from 'antd/lib/slider';
import store from '../../redux/store';


type DispatchProps = {
    changeTime: (value: SliderValue) => void;
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeTime: (value: SliderValue) => {
            if (typeof value === 'number') {
                dispatch( createAction<number>('setTime')(value) );
            }
            console.log(store.getState() )
        }
    }  
}

function TimelineSlider({changeTime}: DispatchProps) {
    return <div className="slidercontainer">
        <Slider
            defaultValue={0}
            min={0}
            max={3600}
            vertical={true}
            reverse={true}
            onChange={changeTime}
        />
    </div>
}

export default connect(
    null, 
    mapDispatchToProps
    )
    (TimelineSlider);