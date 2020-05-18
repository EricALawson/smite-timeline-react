
import {configureStore} from '@reduxjs/toolkit';
import godReducer from './reducers/GodReducer';
import buildReducer from './reducers/BuildReducer';
import timelineReducer from './reducers/TimelineReducer';
import killTimingReducer from './reducers/KillTimingReducer';

const store = configureStore({
    reducer: {
        god: godReducer,
        build: buildReducer,
        killTiming: killTimingReducer,
        timeline: timelineReducer
    }
});

export default store;