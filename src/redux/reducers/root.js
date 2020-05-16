import StatBlock from '../../data_objects/StatBlock'

const defaultStats = {
    gods : [
        new StatBlock({health : 400, power : 100 }),
        new StatBlock({health : 300, hp5 : 3})
    ]
}

function rootReducer(state = {stats: defaultStats}, action) {
    return state;
}

export default rootReducer;