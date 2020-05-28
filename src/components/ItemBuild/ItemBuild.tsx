import React from 'react';
import './ItemBuild.css';
import ItemSlot from './ItemSlot/ItemSlot';
import ItemSelector from './ItemSelector/ItemSelector';

type BuildProp = {
    buildIdentifier: string
}

const itemCount = 6;

const ItemBuild = ({buildIdentifier}: BuildProp) => {
    const [build, updateBuild] = React.useState(Array(itemCount).fill(null))
    const [isItemSelectorOpen, setItemSelectorOpen] = React.useState(false);
    
    let slots = [];
    for(let count: number = 0; count < itemCount; count++) {
        slots.push(<ItemSlot key={count} item={build[count]} openSelector={() => {setItemSelectorOpen(true)}}></ItemSlot>);
    }
    return (
        <div className="ItemBuild">
            <ItemSelector openState={isItemSelectorOpen} closeSelector={() => {setItemSelectorOpen(false)}}></ItemSelector>
            <ol className="Build">
                {slots}
            </ol>
        </div>
    )
}

export default ItemBuild;