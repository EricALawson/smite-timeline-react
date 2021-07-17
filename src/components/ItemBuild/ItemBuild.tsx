import React from 'react';
import './ItemBuild.css';
import ItemSlot from './ItemSlot/ItemSlot';
import buildIdentifier from "../../redux/buildIdentifier";
import { connect } from 'react-redux';
import { Item } from '@smite-timeline/smite-game-objects';

type ParentProps = {
    buildIdentifier: buildIdentifier,
}
type StateProps = {
    items: Item[]
}

const mapStateToProps = (state: any, ownProps: ParentProps) => {
    return {items: state[ownProps.buildIdentifier].items}
}

const ItemBuild = ({buildIdentifier, items}: ParentProps & StateProps) => {
    
    let slots = [];
    for(let count = 0; count < items.length; count++) {
        slots.push(<ItemSlot 
            key={count}
            slot={{
                buildID: buildIdentifier,
                index: count
            }}
            item={items[count]} 
        ></ItemSlot>);
    }

    return (
        <div className="ItemBuild">
            <ol className="Build">
                {slots}
            </ol>
        </div>
    )
}

export default connect(mapStateToProps)(ItemBuild);