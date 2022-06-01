import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit"
import { Item } from "@smite-timeline/smite-game-objects";
import { Axios} from "axios";
import { RootState} from "../store";

export type ItemListState = {[key: string]: Item};

const addItemsAction = (payload: ItemListState) => {
    return {
        type: "addItems",
        payload: payload
    }
}

//a Slice of the redux store that caches all Item data after reading from the server.
const ItemList = createSlice({
    name: 'items',
    initialState: {} as ItemListState,
    reducers: { 
        addItems: (state: ItemListState, action: PayloadAction<ItemListState>) => {
            return action.payload;
        }
    }
});

export default ItemList;

export const thunkLoadItems =
    (): ThunkAction<void, RootState, Axios, PayloadAction<ItemListState>> =>
    async (dispatch, _, axios) => {
        try {
            const response = await axios.get<ItemListState>(`http://localhost:5000/items`);
            dispatch(addItemsAction(response.data));
        } catch(err) {
            console.error(err);
        }
    }