import React from 'react';
import './ItemSelector.css';

const ItemSelector = ({prev, showSelector, setItemSlot}) => {

    const Selector = () => {
        return (
            <div className='ItemSelector'>
    
            </div>
        )
    }
    
    const setSelection = (selectedItem) => {
        showSelector(false);
        setItemSlot(selectedItem);
    }

    return (
        <div className='background-fade' onClick={()=> {setSelection(prev)}}>
            <Selector></Selector>
        </div>
    )
}

export default ItemSelector;