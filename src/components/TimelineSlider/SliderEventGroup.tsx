import { BuildEvent } from "../../redux/selectors/StatsSelector";
import React from "react";
import ItemSlot from "../ItemBuild/ItemSlot/ItemSlot";
import "./SliderEventGroup.css";

type Props = {
    events: BuildEvent[]
}
const Spacer = () => <div className='level-spacer'></div>


const SliderEventGroup = ({ events}: Props) => {
    return (<div className={'event-group'}>
        <div className='left event-group-side'>
        {
            events.filter(event => event.type === 'level').length > 0
                ? null
                : <Spacer></Spacer>
        }
        {
            events.filter( event => event.slot.buildID === 'left')
                .map( (event): JSX.Element => {
                    switch (event.type) {
                        case 'item finished': return <ItemSlot item={event.item} slot={event.slot}></ItemSlot>
                        case 'level': return <div className={'level-event'}>{event.level}</div>
                    }
            })
        }</div>
        <div className='right event-group-side'>
        {
            events.filter(event => event.type === 'level').length > 0
                ? null
                : <Spacer></Spacer>
        }
        {
            events.filter( event => event.slot.buildID === 'right')
                .map( (event): JSX.Element => {
                    switch (event.type) {
                        case 'item finished': return <ItemSlot item={event.item} slot={event.slot}></ItemSlot>
                        case 'level': return <div className={'level-event'}>{event.level}</div>
                    }
            })
        }
        </div>
    </div>)
}

export default SliderEventGroup;