import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Item from "../../data_objects/Item";
import { defaultItems } from "../../data_objects/TestObjects";

const ItemList = createSlice({
    name: 'items',
    initialState: defaultItems,
    reducers: {
        addItems: (state: Item[], action: PayloadAction<Item[]>) => {
            return [...state, ...action.payload];
        }
    }
});

export default ItemList;