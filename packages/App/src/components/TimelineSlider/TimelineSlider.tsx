import React, { Dispatch } from 'react';
import './TimelineSlider.css';
import { connect } from 'react-redux';
import {Slider} from 'antd';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { SliderMarks } from 'antd/lib/slider';
import { RootState } from '../../redux/store';
import buildIdentifier from "../../redux/buildIdentifier";
import makeStatsSelector, { BuildEvent } from '../../redux/selectors/StatsSelector';
import AddItemButton from '../ItemBuild/AddItemButton/AddItemButton';
import SliderEventGroup from './SliderEventGroup';
import SliderTooltip from './SliderTooltip';


type DispatchProps = ReturnType<typeof mapDispatchToProps>
const mapDispatchToProps = (dispatch: Dispatch<PayloadAction<number>>) => {
    return {
        changeTime: (value: number) => {
            if (typeof value === 'number') {
                dispatch( createAction<number>('setTime')(value) );
            }
        }
    }  
}

type StateProps = ReturnType<typeof mapState>
const mapState = (state: RootState) => {
    const leftEvents = makeStatsSelector(buildIdentifier.left)(state.left);
    const rightEvents = makeStatsSelector(buildIdentifier.right)(state.right);
    const timeRange = leftEvents[leftEvents.length -1] > rightEvents[rightEvents.length -1]
                        ? leftEvents[leftEvents.length -1].time
                        : rightEvents[rightEvents.length -1].time;
    return {
        leftEvents: leftEvents,
        rightEvents: rightEvents,
        timeRange: timeRange
    }
}

const Spacer = () => <div className='level-spacer'></div>

function TimelineSlider({changeTime, leftEvents, rightEvents, timeRange}: DispatchProps & StateProps) {
    const marks: SliderMarks = {};
    const timeMap: Map<number, BuildEvent[]> = new Map();
    leftEvents.concat(rightEvents).forEach((event: BuildEvent) => {
        const otherEvents = timeMap.get(event.time);
        if( !otherEvents) {
            timeMap.set(event.time, [ event ])
        } else {
            timeMap.set(event.time, [...otherEvents, event ]);
        }
    });
    timeMap.forEach(eventList => {
        marks[eventList[0].time] = <SliderEventGroup events={eventList}></SliderEventGroup>
    });
    marks[timeRange + 90] = {
        label: <div className='event-group'>
                <div className='left event-group-side'>
                    <Spacer></Spacer>
                    <AddItemButton side={buildIdentifier.left}></AddItemButton>
                </div>
                <div className='right event-group-side'>
                    <Spacer></Spacer>
                    <AddItemButton side={buildIdentifier.right}></AddItemButton>
                </div>
            </div>
    }

    return <div className="slidercontainer">
        <Slider
            defaultValue={0}
            min={0}
            max={timeRange + 60}
            step={5}
            vertical={true}
            reverse={true}
            onChange={changeTime}
            marks={marks}
            //tooltipVisible={true} disabled until I figure out how to make the tooltip display under the ItemPicker.
            tooltipPlacement='top'
            tipFormatter={SliderTooltip}
        />
    </div>
}

export default connect(
    mapState, 
    mapDispatchToProps
    )
    (TimelineSlider);