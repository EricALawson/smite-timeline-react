import { createReducer, createSlice } from '@reduxjs/toolkit';
import Item from '../../data_objects/Item';
import Build from '../../data_objects/Build';

type BuildAction = {
    payload: {
        index: number,
        item: Item
    }
}

const setItemAt = (state: Build, action: BuildAction) => {
    state.items[action.payload.index] = action.payload.item
};

const removeItemAt = (state: Build, action: BuildAction) => {
    state.items[action.payload.index] = undefined;
}




export {setItemAt, removeItemAt};