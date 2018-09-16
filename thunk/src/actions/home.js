import {createAction} from 'redux-actions'
import * as types from '../constants/ActionTypes'
import * as homeService from '../services/homeService'


// export const getCover = createAction(types.GET_COVER, homeService.get_cover)
export const getHome = createAction(types.GET_HOME, homeService.get_home)
export const getUpdate = createAction(types.GET_UPDATE, homeService.get_update)
export const getAll = createAction(types.GET_ALL, homeService.get_all)
export const getSearch = createAction(types.GET_SEARCH, async(title) => {
    return await homeService.search(title)
}, (title) => {
    return {title}
})
