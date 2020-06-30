import React from 'react';
import './ItemPicker.css';
import store, { buildIdentifier, buildSlices } from '../../../redux/store';
import { connect } from 'react-redux';
import { closeItemPicker } from '../../../redux/reducers/ItemPickerSlice';
import { shoesOfTheMagi } from '../../../data_objects/TestObjects';

type Slot = {
    buildID: buildIdentifier,
    index: number
}

type SelectorProps = {
    isSelectorOpen: boolean,
    slot: Slot
}

const mapStateToProps = (state: any) => {
    return {
        isSelectorOpen: state.itemPicker.isOpen,
        slot: state.itemPicker.slot
    }
}

const ItemPicker = ({isSelectorOpen, slot}: SelectorProps) => {

    const closeSelector = () => {
        store.dispatch({type: closeItemPicker})
    }

    //TODO: return item selected in the item picker instead of default shoesOfTheMagi
    const selectItem = () => {
        let action = {
            type: buildSlices[slot.buildID].actions.setItemAt,
            payload: {
                index: slot.index,
                item: shoesOfTheMagi
            }
        }
        store.dispatch(action);
        closeSelector();
    }
    
    return (
            <dialog className='Item-selector' open={isSelectorOpen}>
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
                    <button onClick={selectItem}>Select Item</button>
                    </div>
            </dialog>
    )
}

export default connect(mapStateToProps)(ItemPicker);