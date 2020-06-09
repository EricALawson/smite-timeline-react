import React from 'react';
import './ItemSlot.css';
import Item from '../../../data_objects/Item';

type SlotProps = {
    item: Item|undefined,
    openSelector: () => void
}

const ItemSlot = ({ item, openSelector}: SlotProps) => {
    // const getItemSelection = () => {
    //     openSelector();
    //     //showSelector(!isSelectorDisplayed);
    //     //open ItemSelector
    
    //     //get item selected, and change the current item to the selection.
    
    //     //hide or close ItemSelector
    // }


    return (
        <li>
            <button onClick={openSelector}></button>
        </li>
    )
}



export default ItemSlot;