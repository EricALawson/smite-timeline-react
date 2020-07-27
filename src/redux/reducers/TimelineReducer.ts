import { createReducer, PayloadAction } from "@reduxjs/toolkit";



const timeReducer = createReducer(0, {
    setTime: (state: number, action: PayloadAction<number>) => {
        return action.payload;
    }
});


export {timeReducer};