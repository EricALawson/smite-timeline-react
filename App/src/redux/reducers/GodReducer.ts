import { PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { God } from '@smite-timeline/smite-game-objects';
import Build from '../../data_objects/Build';
import buildIdentifier from '../buildIdentifier';
import { RootState } from '../store';


const godReducer = (state: Build, action: PayloadAction<God>) => {
    return Build(
        action.payload,
        state.items,
        state.killTiming
    )
};

export default godReducer;

export const setGodAction = (buildID: buildIdentifier, god: God) => {
    return {
        type: buildID + '/godReducer',
        payload: god
    };
};

export const thunkSetGodByName =
    (name: string, buildID: buildIdentifier): ThunkAction<void, RootState, unknown, PayloadAction<God>> =>
    (dispatch, getState) => {
        const god: God = getState().gods.gods[name];
        dispatch(setGodAction(buildID, god))
    }