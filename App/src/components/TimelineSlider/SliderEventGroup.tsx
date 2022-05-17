import { BuildEvent, ItemEvent, LevelEvent } from "../../redux/selectors/StatsSelector";
import React from "react";
import ItemSlot from "../ItemBuild/ItemSlot/ItemSlot";
import "./SliderEventGroup.css";
import buildIdentifier from "../../redux/buildIdentifier";

type Props = {
    events: BuildEvent[]
}
const Spacer = () => <div className='level-spacer'></div>

const orderEventsByType = (events: BuildEvent[], side: buildIdentifier)  => {
    let ordered = [];
    if (events.filter(event => event.type === 'level' && event.slot.buildID === side).length === 0)  {
        ordered.push(<Spacer></Spacer>);
    } else {
        let levelEvents = events.filter((event): event is LevelEvent => event.slot.buildID === side && event.type === 'level')
                            .map(event => <div className='level-event'>{event.level}</div>)
        ordered.push(...levelEvents);
    }
    let itemEvents = events.filter((event): event is ItemEvent => event.slot.buildID === side && event.type === 'item finished')
                            .map(event => <ItemSlot key={event.slot.index} item={event.item} slot={event.slot}></ItemSlot>)
    ordered.push(...itemEvents);
    return ordered;
}


const SliderEventGroup = ({ events}: Props) => {
    return (<div className={'event-group'}>
        <div className='left event-group-side'>
            {orderEventsByType(events, buildIdentifier.left)}
        </div>
        <div className='right event-group-side'>
            {orderEventsByType(events, buildIdentifier.right)}
        </div>
    </div>)
}

export default SliderEventGroup;