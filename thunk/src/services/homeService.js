import axios from 'axios'
import * as requestService from './request'

export function get_home() {
    return requestService.get('https://demo0136054.mockable.io/top_hot')
        .then(respone => {
            return respone.data
    })
}

export function get_update() {
    return requestService.get('https://demo0136054.mockable.io/new_manga')
        .then(respone  => {
            return respone.data
    })
}

export function get_all() {
    return requestService.get('https://demo0136054.mockable.io/all_book')
        .then(respone => {
            return respone.data})
}

export function search(title) {
    return requestService.get('https://demo0136054.mockable.io/book/search='+ title)
        .then(respone => respone.data)
}


