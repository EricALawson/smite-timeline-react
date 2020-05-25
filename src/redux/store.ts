
import {configureStore, createSlice} from '@reduxjs/toolkit';
import godReducer from './reducers/GodReducer';
import {setItemAt, removeItemAt} from './reducers/itemReducer';
import killTimingReducer from './reducers/KillTimingReducer';
import Build from '../data_objects/Build';
import timelineReducer from './reducers/TimelineReducer';

const buildSlice = (name: string) => {
    return createSlice({
        name: name,
        initialState: new Build(),
        reducers: {
            godReducer,
            setItemAt,
            removeItemAt,
            killTimingReducer
        }
    })
}

const leftBuild = buildSlice('left');
const rightBuild = buildSlice('right');

const store = configureStore({
    reducer: {
        left: leftBuild.reducer,
        right: rightBuild.reducer,
        time: timelineReducer
    }
});

export default store;