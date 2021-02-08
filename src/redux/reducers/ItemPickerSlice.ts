import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit"
import buildIdentifier from "../buildIdentifier";
import Item, { EmptySlot } from "../../data_objects/Item";

type Slot = {
    buildID: buildIdentifier,
    index: number
}

export type {Slot};

type ItemFilter = (item: Item) => boolean

type ItemPickerState = {
    isOpen: boolean,
    slot: Slot,
    selected: Item,
    activeFilters: ItemFilter[]
}


const itemPicker = createSlice({
    name: 'itemPicker',
    initialState: {
        isOpen: false,
        slot: {
            buildID: buildIdentifier.left,
            index: 0
        },
        selected: EmptySlot,
        activeFilters: [] as ItemFilter[],
    },
    reducers: {
        closeItemPicker: (state: ItemPickerState, action: Action) => {
            let newState = Object.assign({}, state)
            newState.isOpen = false;
            newState.selected = EmptySlot;
            return newState;
        },
        openItemPicker: (state: ItemPickerState, action: PayloadAction<Slot>) => {
            let newState = Object.assign({}, state)
            newState.slot = action.payload
            newState.isOpen = true;
            return newState;
        },
        setSelected: (state: ItemPickerState, action: PayloadAction<Item>) => {
            let newState = Object.assign({}, state)
            newState.selected = action.payload;
            return newState;
        },
        toggleFilter: (state: ItemPickerState, action: PayloadAction<ItemFilter>) => {
            let newState = Object.assign({}, state);
            let index = state.activeFilters.findIndex(filter => filter === action.payload);
            if (index > -1) {
                newState.activeFilters.splice(index, 1);
            } else {
                newState.activeFilters.push(action.payload)
            }
            return newState;
        }
    }
})

const closeItemPicker = itemPicker.actions.closeItemPicker;
const openItemPicker = itemPicker.actions.openItemPicker;

export {closeItemPicker, openItemPicker};

export default itemPicker;