import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
import { books as initialBooks } from "../books.js"

const BOOK_KEY = 'BOOK_DB'
var gFilterBy = { title: '', minPrice: 0 }

export const bookService = {
    query,
    get,
    remove,
    save,
    //getEmptyCar: getEmptyBook,
    getNextCarId: getNextBookId,
    getFilterBy,
    setFilterBy,
    _createDemoBooks
}

function query() {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (gFilterBy.title) {
                const regex = new RegExp(gFilterBy.title, 'i')
                books = books.filter(book => regex.test(book.title))
            }
            // if (gFilterBy.minSpeed) { 
            //     books = books.filter(book => book.maxSpeed >= gFilterBy.minSpeed)
            // }
            // return books
        })
}

function get(BookId) {
    return storageService.get(BOOK_KEY, BookId)
}

function remove(carId) {
    return storageService.remove(BOOK_KEY, carId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}


function getFilterBy() {   // copoy of
    return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
    if (filterBy.title !== undefined) gFilterBy.title = filterBy.title
    //if (filterBy.minSpeed !== undefined) gFilterBy.minSpeed = filterBy.minSpeed
    return gFilterBy
}

function getNextBookId(carId) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            let nextBookIdx = books.findIndex(car => car.id === carId) + 1
            if (nextBookIdx === books.length) nextBookIdx = 0
            return books[nextBookIdx].id
        })
}

function _createDemoBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = []
        books.push({
            "id": "OXeMG8wNskc",
            "title": "metus hendrerit",
            "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
            "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
            "listPrice": {
              "amount": 109,
              "currencyCode": "EUR",
              "isOnSale": false
            }})
        books.push({
            "id": "JYOJa2NpSCq",
            "title": "morbi",
            "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
            "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
            "listPrice": {
              "amount": 44,
              "currencyCode": "EUR",
              "isOnSale": true
            }
          })
        books.push({
            "id": "1y0Oqts35DQ",
            "title": "at viverra venenatis",
            "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
            "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
            "listPrice": {
              "amount": 108,
              "currencyCode": "ILS",
              "isOnSale": false
            }
          })
        utilService.saveToStorage(BOOK_KEY, books)
    }
}






  
  
  


// function _createBook({id, title, description, thumbnail, {amount, currencyCode, isOnSale}}) {
//     const book = getEmptyBook(vendor, maxSpeed)
//     book.id = utilService.makeId()

//     return book
// }



// function getEmptyBook() {
//     return {
//         id: '',
//         title: '',
//         description: '',
//         thumbnail: '',
//         listPrice: {
//             amount: 0,
//             currencyCode: '',
//             isOnSale: false
//         }
//     }
// }