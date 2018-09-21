import { AsyncStorage } from "react-native"

export const read_Book = async (bookDetail) => {
    
    AsyncStorage.getItem('Book_Recent', (err, result) => {
        if(err) {
            alert('Có lỗi xảy ra')
        }
        console.log('get Item ', result)
        if(!result) {
            var recent_book = {}
            recent_book[bookDetail.id] = {title: bookDetail.title, authors: bookDetail.authors, time: new Date().toLocaleString()}
            AsyncStorage.setItem('Book_Recent', JSON.stringify(recent_book), (err) => {
                if(err) {
                    console.log(err)
                }
            })
        } else {
            var listBook = JSON.parse(result)
            listBook[bookDetail.id] = {title: bookDetail.title, authors: bookDetail.authors, time: new Date().toLocaleString(), link_thumbnail: bookDetail.link_thumbnail}
            AsyncStorage.setItem('Book_Recent', JSON.stringify(listBook), (err) => {
                if(err) {
                    console.log(err)
                }
            })
        }
    });
}