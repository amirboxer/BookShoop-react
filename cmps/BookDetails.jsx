import { bookService } from "../services/book.Service.js"

const { useEffect, useState } = React


export function BookDetails({bookId, onBack}) {
    const [book, setBook] = useState(null)

    useEffect(() => {
        bookService.get(bookId)
        .then(book => setBook(book))
    }, [])


    if (!book) return
    return (
        <div className="BookDetails">

            {/* id */}
            <label className="book-id" htmlFor="id">Id:</label>
            <p id="id">{book.id}</p>

            <label className="book-description" htmlFor="description">Id:</label>
            <p id="description">{book.description}</p>

            {/* thumbnail */}
            <img src={book.thumbnail} alt="" />

            {/* Title */}
            <label className="book-title" htmlFor="title">Title:</label>
            <p id="title">{book.title}</p>

            {/* Price */}
            <label className="book-title" htmlFor="price">Price:</label>
            <p id="price">{`${book.listPrice.amount} ${book.listPrice.currencyCode}${book.listPrice.isOnSale? ' ON SALE!' : ''}` }</p>

            {/* back-btn */}
            <button onClick={() => onBack(null)}>back</button>           
        </div>
    )
}