import KillTiming from "../../data_objects/KillTiming";
import Build from "../../data_objects/Build";

const killTimingReducer = (state: Build, action: any) => {
    new KillTiming();
}

export default killTimingReducer;