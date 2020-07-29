import React from 'react';
import './TimelineSlider.css';
import { connect } from 'react-redux';
import {Slider} from 'antd';
import { createAction } from '@reduxjs/toolkit';
import { SliderValue, SliderMarks } from 'antd/lib/slider';
import { buildIdentifier, RootState } from '../../redux/store';
import ItemSlot from '../ItemBuild/ItemSlot/ItemSlot';
import { shoesOfFocus } from '../../data_objects/TestObjects';
import makeStatsSelector, { BuildEvent, ItemEvent } from '../../redux/selectors/StatsSelector';


type DispatchProps = ReturnType<typeof mapDispatchToProps>
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeTime: (value: SliderValue) => {
            if (typeof value === 'number') {
                dispatch( createAction<number>('setTime')(value) );
            }
        }
    }  
}

type StateProps = ReturnType<typeof mapState>
const mapState = (state: RootState) => {
    const leftEvents = makeStatsSelector()(state.left);
    const rightEvents = makeStatsSelector()(state.right);
    const timeRange = leftEvents[leftEvents.length -1] > rightEvents[rightEvents.length -1]
                        ? leftEvents[leftEvents.length -1].time
                        : rightEvents[rightEvents.length -1].time;
    return {
        leftEvents: leftEvents,
        rightEvents: rightEvents,
        timeRange: timeRange
    }
}

function isItemEvent(event: BuildEvent): event is ItemEvent {
    return (event as ItemEvent).item !== undefined;
}

function TimelineSlider({changeTime, leftEvents, rightEvents, timeRange}: DispatchProps & StateProps) {
    const marks: SliderMarks = {};
    leftEvents.forEach((event: BuildEvent, index: number) => {
        console.log(event);
        if(isItemEvent(event)) {
            marks[event.time] = {
                label: <ItemSlot 
                    slot={ {buildID: buildIdentifier.left, index: index}} 
                    item={event.item}
                ></ItemSlot>
            }
        }
    });
    console.log(marks);

    return <div className="slidercontainer">
        <Slider
            defaultValue={0}
            min={0}
            max={timeRange}
            vertical={true}
            reverse={true}
            onChange={changeTime}
            marks={marks}
        />
    </div>
}

export default connect(
    mapState, 
    mapDispatchToProps
    )
    (TimelineSlider);