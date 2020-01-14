import React from 'react';
import './ItemBuild.css';
import ItemSlot from './ItemSlot/ItemSlot.js';

const maxItemCount = 10;

const ItemBuild = ({godNum}) => {
    const build = React.useState(Array(6).fill(null))
    let slots = [];
    for(let count = 0; count < maxItemCount; count++) {
        slots.push(<ItemSlot id={count} item={build[count]}></ItemSlot>);
    }
    return (
        <div className="ItemBuild">
            <ol className="Build">
                {slots}
            </ol>
        </div>
    )
}

export default ItemBuild;