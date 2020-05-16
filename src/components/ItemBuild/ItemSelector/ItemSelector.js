import React from 'react';
import './ItemSelector.css';

const ItemSelector = ({openState, closeSelector}) => {
    // const ref = React.useRef();
    // useOutsideClick(ref, closeSelector);
    
    return (
            <dialog className='Item-selector' open={openState}>
                <form method='dialog'>
                    <div className='search'>
                        <div className='vertical-container'>
                            Item Name:
                            <input type='search'></input>
                            <div className='horizontal-container'>
                                <div className='filters'>
                                    GENERAL
                                    <ul>

                                    </ul>
                                    OFFENSIVE
                                    <ul>

                                    </ul>
                                    DEFENSIVE
                                    <ul>

                                    </ul>
                                    UTILITY
                                    <ul>

                                    </ul>
                                </div>
                                <ul className='search-results'>
                                    <li className='item-search-result'>dummy1</li>
                                    <li className='item-search-result'>dummy2</li>
                                    <li className='item-search-result'>dummy3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='item-view'>
                    <button onClick={closeSelector}>Cancel</button>
                    </div>
                </form>
            </dialog>
    )
}

export default ItemSelector;