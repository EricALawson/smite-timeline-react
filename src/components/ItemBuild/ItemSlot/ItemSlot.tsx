import React, {useState} from 'react';
import './ItemSlot.css';
import ItemSelector from '../ItemSelector/ItemSelector';

type SlotProps = {
    key: number,
    item: string,
    openSelector: () => void
}

const ItemSlot = ({key, item, openSelector}: SlotProps) => {
    const getItemSelection = () => {
        openSelector();
        //showSelector(!isSelectorDisplayed);
        //open ItemSelector
    
        //get item selected, and change the current item to the selection.
    
        //hide or close ItemSelector
    }


    return (
        <li>
            <button onClick={openSelector}></button>
        </li>
    )
}



export default ItemSlot;