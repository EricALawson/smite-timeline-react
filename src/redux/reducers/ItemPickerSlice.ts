import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit"
import buildIdentifier from "../buildIdentifier";
import Item, { EmptySlot } from "../../data_objects/Item";
import { FilterName } from "../../components/ItemBuild/ItemPicker/FilterList";

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
    activeFilters: FilterName[]
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
        activeFilters: [] as FilterName[],
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
        toggleFilter: (state: ItemPickerState, action: PayloadAction<FilterName>) => {
            //I use Immer here to modify state because this next line causes immer to error 
            //if I return a state object, because Immer thinks this line modifies the state, 
            //and it wont allow modification to the proxy state and returning a new state, 
            //which would likely be a bug. I think Immer is wrong about this line, but fighting it is a waste of time.
            let index = state.activeFilters.findIndex(filter => filter === action.payload);
            if (index > -1) {
                state.activeFilters.splice(index, 1);
            } else {
                state.activeFilters.push(action.payload)
            }
        }
    }
})

const closeItemPicker = itemPicker.actions.closeItemPicker;
const openItemPicker = itemPicker.actions.openItemPicker;

export {closeItemPicker, openItemPicker};

export default itemPicker;