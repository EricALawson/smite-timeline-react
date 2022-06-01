
import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { God } from "@smite-timeline/smite-game-objects";
import axios, { Axios } from "axios";
import { RootState } from "./store";

export type GodListState = {
    names: string[],
    gods: {[key: string]: God}
}

export default createSlice({
    name: "gods",
    initialState: {
        names: [],
        gods: {}
    } as GodListState,
    reducers: {
        updateGodNameList: (state: GodListState, action: PayloadAction<string[]>) => {
            const names = action.payload;
            return {...state, names};
        },
        updateGodStats: (state: GodListState, action: PayloadAction<God>) => {
            const newState = {
                names: state.names,
                gods: {...state.gods}
            }
            newState.gods[action.payload.name] = action.payload;
            return newState;
        }
    }
})

export const thunkLoadGodNames =
    (): ThunkAction<void, RootState, unknown, PayloadAction<string[]>> =>
    async (dispatch, getState) => {
        try {
            const request = await axios.get<string[]>(`http://localhost:5000/godnames`);
            dispatch({
                type: 'gods/updateGodNameList',
                payload: request.data
            });
        } catch (err) {
            console.error(`Error throw trying to load a list of all god names from server`);
            console.error(err)
        }
    }

export const thunkLoadGodStats =
    (name: string): ThunkAction<Promise<void>, RootState, Axios, PayloadAction<God>> =>
    async (dispatch, getState, axios) => {
        try {
            const request = await axios.get<God>(`http://localhost:5000/gods/${name}`);
            dispatch({
                type: "gods/updateGodStats",
                payload: request.data
            });
        } catch(err) {
            console.error(`Error throw when trying to load ${name} from server`);
            console.error(err);
        }
    }