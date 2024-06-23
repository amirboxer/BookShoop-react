import { bookService } from "../services/book.Service.js"

const { useEffect, useState } = React


export function BookDetails({ bookId, onBack }) {
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
            <div id="id">{book.id}</div>

            {/* Title */}
            <label className="book-title" htmlFor="title">Title:</label>
            <div id="title">{book.title}</div>

            {/* subtitle */}
            <label className="book-subtitle" htmlFor="subtitle">Subtitle:</label>
            <div id="subtitle">{book.subtitle}</div>


            {/* authors */}
            <label className="book-authors" htmlFor="authors">authors:</label>
            <div id="authors">{book.authors[0]}</div>


            {/* publishedDate */}
            <label className="book-publishedDate" htmlFor="publishedDate">publish Year:</label>
            <div id="publishedDate">{book.publishedDate}</div>


            {/* description */}
            <label className="book-description" htmlFor="description">Id:</label>
            <div id="description">{book.description}</div>

            {/* description */}
            <label className="book-pageCount" htmlFor="pageCount">pageCount:</label>
            <div id="pageCount">{book.pageCount}</div>

            {/* categories */}
            <label className="book-categories" htmlFor="pageCount">categories:</label>
            <div id="categories">{book.categories.map((c, index) => (<div key={index}>{c}</div>))}</div>

            {/* thumbnail */}
            <img src={book.thumbnail} alt="" />

            {/* language */}
            <label className="book-language" htmlFor="language">language:</label>
            <div id="language">{book.language}</div>

            {/* Price */}
            <label className="book-title" htmlFor="price">Price:</label>
            <div id="price">{`${book.listPrice.amount} ${book.listPrice.currencyCode}${book.listPrice.isOnSale ? ' ON SALE!' : ''}`}</div>

            {/* back-btn */}
            <button onClick={() => onBack(null)}>back</button>
        </div>
    )
}