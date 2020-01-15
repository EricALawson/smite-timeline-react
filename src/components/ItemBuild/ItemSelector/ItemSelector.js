import React from 'react';
import './ItemSelector.css';

const ItemSelector = ({openState, closeSelector}) => {
    // const ref = React.useRef();
    // useOutsideClick(ref, closeSelector);
    
    return (
            <dialog className='ItemSelector' open={openState}>
                <form method='dialog'>
                    <button onClick={closeSelector}>Cancel</button>
                </form>
            </dialog>
    )
}

export default ItemSelector;