import React from 'react';
import './ItemSlot.css';
import Item from '../../../data_objects/Item';
import { Slot, openItemPicker } from '../../../redux/reducers/ItemPickerSlice';
import store from '../../../redux/store';

type SlotProps = {
    item: Item,
    slot: Slot
}

const ItemSlot = ({ item, slot}: SlotProps) => {
    const openSelector = () => {
        
        let action = openItemPicker(slot)
        store.dispatch(action)
    };

    return (
        <li>
            <img 
                className='item-slot' 
                src={item.image} 
                alt='selected item' 
                onClick={openSelector} 
                role='button'
                aria-label='item slot'></img>
        </li>
    )
}



export default ItemSlot;