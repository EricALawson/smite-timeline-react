
import {configureStore, createSlice, combineReducers} from '@reduxjs/toolkit';
import godReducer from './reducers/GodReducer';
import {setItemAt, removeItemAt} from './reducers/itemReducer';
import killTimingReducer from './reducers/KillTimingReducer';
import Build from '../data_objects/Build';
import {timeReducer} from './reducers/TimelineReducer';
import { Ares } from '../data_objects/TestObjects';
import itemPicker from './reducers/ItemPickerSlice';
import buildIdentifier from './buildIdentifier';

const buildSlice = (name: buildIdentifier) => {
    return createSlice({
        name: name,
        initialState: Build(Ares),
        reducers: {
            godReducer,
            setItemAt,
            removeItemAt,
            killTimingReducer
        }
    })
}

const leftBuild = buildSlice(buildIdentifier.left);
const rightBuild = buildSlice(buildIdentifier.right);

const buildSlices = {
    left: leftBuild,
    right: rightBuild
}

export {buildSlices};

const rootReducer = combineReducers({
    left: leftBuild.reducer,
    right: rightBuild.reducer,
    time: timeReducer,
    itemPicker: itemPicker.reducer
});

export {rootReducer}

const store = configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>;
export type { RootState };

export default store;