// services
import { bookService } from "../services/book.Service.js"

// jsx
import { BookList } from "../cmps/BookList.jsx"
import { BookDetails } from "../cmps/BookDetails.jsx"
import { FilterBooks } from "../cmps/FilterBooks.jsx"

// react
const { useEffect, useState } = React


export function BookIndex() {


    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState({ title: '', maxPrice: null })

    useEffect(() => {
        bookService.query()
            .then(books => setBooks(books))
    }, [filterBy])


    function onSetFilterBy(filterBy) {
        console.log('filterBy', filterBy)

        bookService.setFilterBy(filterBy)
        setFilterBy({ ...filterBy })
    }

    // calback for book deatelas
    function onSelectBook(bookId) {
        setSelectedBook(bookId)
    }

    // dom
    return (
        <section className="book-index">
            {!selectedBook && <React.Fragment>
                <FilterBooks onSetFilterBy={onSetFilterBy} filtersVals={filterBy}/>
                <BookList books={books} onSelectBook={onSelectBook} />
            </React.Fragment>}
            {selectedBook && <BookDetails bookId={selectedBook} onBack={onSelectBook} />}
        </section>
    )
}