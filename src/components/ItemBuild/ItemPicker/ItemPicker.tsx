import React, { useRef } from 'react';
import './ItemPicker.css';
import { RootState } from '../../../redux/store';
import buildIdentifier from "../../../redux/buildIdentifier";
import { useDispatch, useSelector } from 'react-redux';
import { closeItemPicker } from '../../../redux/reducers/ItemPickerSlice';
import { Button} from 'antd';
import ItemInfoBrief from './ItemInfoBrief';
import FilterList from './FilterList';
import { EmptySlot } from '@smite-timeline/smite-game-objects/lib/Item';

type Slot = {
    buildID: buildIdentifier,
    index: number
}

const ItemPicker = () => {

    const {isOpen, slot, selected, activeFilters} = useSelector((state: RootState) =>  state.itemPicker);
    const dispatch = useDispatch();
    const searchInput = useRef<HTMLInputElement>(null);

    const closeSelector = () => dispatch({type: closeItemPicker.type});
    
    const selectItem = () => {
        if (selected !== EmptySlot){
            let action = {
                type: slot.buildID + '/setItemAt',
                payload: {
                    index: slot.index,
                    item: selected
                }
            }
            dispatch(action);
        }
        closeSelector();
    }

    const allItems = useSelector((state: RootState) => state.items);

    return (
        <dialog 
            className='border-gradient item-picker'
            open={isOpen}  
            role='form'
            aria-label='item picker'
        >
            <div className='major-container'>
                <FilterList></FilterList>
                <div className='search-items-and-input'>
                        <input
                            className='search-input'
                            ref={searchInput}
                            type='search'
                        ></input>
                        <div className='search-results'>
                            {allItems.map(item => <ItemInfoBrief 
                                item={item}
                                itemFamily={null}
                            ></ItemInfoBrief>)}
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

export default ItemPicker;