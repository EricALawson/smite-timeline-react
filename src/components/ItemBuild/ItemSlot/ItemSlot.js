import React, {useState} from 'react';
import './ItemSlot.css';
import ItemSelector from '../ItemSelector/ItemSelector';

const ItemSlot = ({id, item}) => {
    const [isSelectorDisplayed, showSelector] = useState(false);
    
    const getItemSelection = () => {
        showSelector(!isSelectorDisplayed);
        //open ItemSelector
    
        //get item selected, and change the current item to the selection.
    
        //hide or close ItemSelector
    }


    return (
        <li>
            <button onClick={getItemSelection}></button>
            {isSelectorDisplayed && <ItemSelector prev={item} showSelector={showSelector}></ItemSelector>}
        </li>
    )
}



export default ItemSlot;