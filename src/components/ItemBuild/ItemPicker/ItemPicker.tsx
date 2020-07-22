import React from 'react';
import './ItemPicker.css';
import store, { buildIdentifier, buildSlices } from '../../../redux/store';
import { connect } from 'react-redux';
import { closeItemPicker } from '../../../redux/reducers/ItemPickerSlice';
import { shoesOfTheMagi } from '../../../data_objects/TestObjects';
import { Button} from 'antd';

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
        <dialog 
            className='border-gradient item-picker'
            open={isSelectorOpen}  
            //style={isSelectorOpen ? {} : {display: 'none'}} //some css styling interferes with hiding the ItemPicker, this will force it to hide.
            role='form'
            aria-label='item picker'
        >
            <div className='major-container'>
                <div className='search'>
                    <div className='filters'>
                        GENERAL
                        <ul className='filter-list'>

                        </ul>
                        OFFENSIVE
                        <ul className='filter-list'>

                        </ul>
                        DEFENSIVE
                        <ul className='filter-list'>

                        </ul>
                        UTILITY
                        <ul className='filter-list'>

                        </ul>
                    </div>
                    <div className='search-items-and-input'>
                        <input
                            className='search-input'
                            type='search'
                        ></input>
                        <ul className='search-results'>
                            <li className='item-search-result'>dummy1</li>
                            <li className='item-search-result'>dummy2</li>
                            <li className='item-search-result'>dummy3</li>
                        </ul>
                    </div>
                </div>
                <div className='item-view'>
                    <div className='item-details'>
                        
                    </div>
                    <div className='control-button-container'>
                        <Button
                            className='control-button'
                            onClick={closeSelector}>Cancel</Button>
                        <Button 
                            className='control-button'
                            onClick={selectItem}>Select Item</Button>
                    </div>
                </div>  
            </div>
        </dialog>
    )
}

export default connect(mapStateToProps)(ItemPicker);