import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx"
import { BookIndex } from "./pages/BookIndex.jsx"

const { useState } = React

export function App() {
    const [page, setPage] = useState('BookIndex')


    return (
        <section className="app">
            <header className="app-header full main-layout">
                    <h1>Book Shop App</h1>
                    <nav className="app-nav">
                        <a onClick={() => setPage('home')} href="#">Home</a>
                        <a onClick={() => setPage('about')} href="#">About</a>
                        <a onClick={() => setPage('BookIndex')} href="#">Books</a>
                    </nav>
            </header>

            <main className="main-layout">
                {page === 'home' && <Home />}
                {page === 'about' && <About />}
                {page === 'BookIndex' && <BookIndex />}
            </main>
        </section>
    )
}