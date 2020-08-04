import React from 'react';
import './ItemSlot.css';
import Item from '../../../data_objects/Item';
import { Slot } from '../../../redux/reducers/ItemPickerSlice';
import { connect } from 'react-redux';

type SlotProps = {
    item: Item,
    slot: Slot
}
type DispatchProp = ReturnType<typeof mapDispatch>

const mapDispatch = (dispatch: any) => { 
    return {
        openItemPicker: (slot: Slot) => { 
            const action = {
                type: 'itemPicker/openItemPicker',
                payload: slot
            }
            dispatch(action) 
        } 
    }
};

const ItemSlot = ({ item, slot}: SlotProps) => {

    const component = ({openItemPicker}: DispatchProp) =>  {
        const open = () => openItemPicker(slot)
        return (
            <img 
                className={'item-slot'} 
                src={item.image} 
                alt='selected item' 
                onClick={open} 
                role='button'
                aria-label='item slot'></img>
        )
};
    const ConnectedComponent = connect(null, mapDispatch)(component);
    return <ConnectedComponent></ConnectedComponent>
}



export default ItemSlot;