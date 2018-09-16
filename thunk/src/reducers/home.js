import * as types from '../constants/ActionTypes'

const initialState = {
    salient: [],
    update: [],
    all: [],
    search_result: []
}

export default function (state = initialState, action) {
    const {payload, error, meta = {}, type} = action
    switch (type) {
        case types.GET_HOME:
            return {
                ...state,
                salient: payload
            }
        case types.GET_UPDATE: 
            return {
                ...state,
                update: payload
            }
        case types.GET_ALL:
            return {
                ...state,
                all: payload
            }
        case types.GET_SEARCH:
            return {
                ...state,
                search_result: payload
            }
        default:
            return state
    }
}