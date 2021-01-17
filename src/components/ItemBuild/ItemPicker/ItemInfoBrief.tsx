import React from 'react';
import Item from '../../../data_objects/Item';
import { useDispatch } from 'react-redux';
import itemPicker from '../../../redux/reducers/ItemPickerSlice';
import './ItemInfoBrief.css';


type Props = {
    item: Item,
    itemFamily: any
}

const ItemInfoBrief = ({item, itemFamily}: Props) => {
    const dispatch = useDispatch();
    return <div 
        className='item-search-result'
        aria-role='button'
        aria-label={'select ' + item.name}
        onClick={event => dispatch({
            type: itemPicker.actions.setSelected,
            payload: item
        })}
        >
        <h1 className='item-name'>{item.name.toUpperCase()}</h1>
        <div className='item-info-across'>
            <img src={item.image}></img>
            <div className='brief-desc'>words</div>
            <div className='item-costs'>{item.goldCost}</div>
        </div>
    </div>
}
export default ItemInfoBrief;