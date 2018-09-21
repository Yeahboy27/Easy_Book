import {createAction} from 'redux-actions'
import * as types from '../constants/ActionTypes'
import * as detailService from '../services/detailService'

export const getDetail = createAction(types.GET_DETAIL, async(id) => {
    return await detailService.get_detail(id.toString())
}, (id) => {
    return {id}
})