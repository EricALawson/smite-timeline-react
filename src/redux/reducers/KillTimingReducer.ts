import { createReducer } from "@reduxjs/toolkit";
import KillTiming from "../../data_objects/KillTiming";

const killTimingReducer = createReducer(new KillTiming(), 
    {

    }
);

export default killTimingReducer;