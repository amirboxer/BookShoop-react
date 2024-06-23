export function BookPreview({book, onSelectBook}) {

    return (
        <div className="BookPreview">
            {/* id */}
            <label className="book-id" htmlFor="id">Id:</label>
            <p id="id">{book.id}</p>

            {/* title */}
            <label className="book-title" htmlFor="title">Title:</label>
            <p id="title">{book.title}</p>

            {/* price */}
            <label className="book-price" htmlFor="price">Price:</label>
            <p id="price">{`${book.listPrice.amount} ${book.listPrice.currencyCode}${book.listPrice.isOnSale? ' ON S-A-L-E!' : ''}` }</p>

            {/* details */}
            <button onClick={() => onSelectBook(book.id)}>More Details</button>
        </div>
    )
}