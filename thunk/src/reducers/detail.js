import * as types from '../constants/ActionTypes'

const initialState = {
    information: []
}

export default function (state = initialState, action) {
    const {payload, error, meta = {}, type} = action
    switch (type) {
        case types.GET_DETAIL:
            return {
                ...state,
                information: payload
            }
        default:
            return state;
    }

}