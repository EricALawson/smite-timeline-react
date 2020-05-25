import { createReducer } from "@reduxjs/toolkit";

type SetTimeAction = {
    type: "setTime",
    payload: {
        time: 0
    }
}

const timelineReducer = createReducer(0, 
    {
        setTime: (state: number, action: SetTimeAction) => {
            state = action.payload.time;
        }
    }
);

export default timelineReducer;