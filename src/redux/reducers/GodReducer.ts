import { createReducer } from '@reduxjs/toolkit';


const godReducer = createReducer("No God selected",
    {
        SET_GOD: (state, action) => {
            state = action.poayload.god;
        }
    }
);

export default godReducer;