import { PayloadAction } from '@reduxjs/toolkit';
import Item from '../../data_objects/Item';
import Build from '../../data_objects/Build';

type SetItemPayload = {
    index: number,
    item: Item
}

const setItemAt = (state: Build, action: PayloadAction<SetItemPayload>) => {
    let items = [...state.items];
    items[action.payload.index] = action.payload.item;
    return new Build(
        state.god,
        items,
        state.killTiming
    )
};

const removeItemAt = (state: Build, action: PayloadAction<number>) => {
    let items = [...state.items];
    items[action.payload] = undefined;
    return new Build(
        state.god,
        items,
        state.killTiming
    )
}

export {setItemAt, removeItemAt};