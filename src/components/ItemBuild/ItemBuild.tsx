import React from 'react';
import './ItemBuild.css';
import ItemSlot from './ItemSlot/ItemSlot';
import ItemSelector from './ItemSelector/ItemSelector';
import { buildIdentifier } from '../../redux/store';
import { connect } from 'react-redux';
import Item from '../../data_objects/Item';

type ParentProps = {
    buildIdentifier: buildIdentifier,
}
type StateProps = {
    items: (Item|undefined)[]
}

const mapStateToProps = (state: any, ownProps: ParentProps) => {
    return {items: state[ownProps.buildIdentifier].items}
}

const ItemBuild = ({buildIdentifier, items}: ParentProps & StateProps) => {
    const [isItemSelectorOpen, setItemSelectorOpen] = React.useState(false);

    
    let slots = [];
    for(let count = 0; count < items.length; count++) {
        slots.push(<ItemSlot 
            key={count} 
            item={items[count]} 
            openSelector={() => {setItemSelectorOpen(true)}}
        ></ItemSlot>);
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

export default connect(mapStateToProps)(ItemBuild);