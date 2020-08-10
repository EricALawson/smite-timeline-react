import { createSlice, Action, PayloadAction } from "@reduxjs/toolkit"
import buildIdentifier from "../buildIdentifier";

type Slot = {
    buildID: buildIdentifier,
    index: number
}

export type {Slot};

type ItemPickerState = {
    isOpen: boolean,
    slot: Slot
}

const itemPicker = createSlice({
    name: 'itemPicker',
    initialState: {
        isOpen: false,
        slot: {
            buildID: buildIdentifier.left,
            index: 0
        }
    },
    reducers: {
        closeItemPicker: (state, action: Action) => {
            return {
                isOpen: false,
                slot: state.slot
            }
        },
        openItemPicker: (state, action: PayloadAction<Slot>) => {
            return {
                isOpen: true,
                slot: {
                    buildID: action.payload.buildID,
                    index: action.payload.index
                }
            }
        }
    }
})

const closeItemPicker = itemPicker.actions.closeItemPicker;
const openItemPicker = itemPicker.actions.openItemPicker;

export {closeItemPicker, openItemPicker};

export default itemPicker;