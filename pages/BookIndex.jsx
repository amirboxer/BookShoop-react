// services
import {bookService} from "../services/book.Service.js"

// jsx
import {BookList} from "../cmps/BookList.jsx"
import {BookDetails} from "../cmps/BookDetails.jsx"

// react
const { useEffect, useState } = React


export function BookIndex() {

    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {  // TODO later filters
        bookService.query()
            .then(books => setBooks(books))
    }, [])



    // calbacks for book deatelas
    function onSelectBook(bookId) {
        setSelectedBook(bookId)
    }


    // dom
    return (
        <section>
        {!selectedBook && <BookList books={books} onSelectBook={onSelectBook}/>}

        {selectedBook && <BookDetails bookId={selectedBook} onBack={onSelectBook}/>}
        </section>
    )
}