import axios from 'axios'
import * as requestService from './request'

export function get_detail(id) {
    return requestService.get('https://demo0136054.mockable.io/book_id='+id)
        .then(respone => {
            return respone.data
    })
}