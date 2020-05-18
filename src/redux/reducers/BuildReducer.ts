import { createReducer, createSlice } from '@reduxjs/toolkit';
import Item from '../../data_objects/Item';

type BuildAction = {
    payload: {
        index: number,
        item: Item
    }
}

const buildReducer = createReducer([] as (Item|undefined)[],
    {
        SET_ITEM_AT: (state: (Item|undefined)[], action: BuildAction) => {
            state[action.payload.index] = action.payload.item
        },
        REMOVE_ITEM_AT: (state: (Item|undefined)[], action: BuildAction) => {
            state[action.payload.index] = undefined;
        }
    }
);


export default buildReducer;