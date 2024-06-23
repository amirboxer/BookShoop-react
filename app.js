import { App } from './RootCmp.jsx'
import {bookService} from './services/book.Service.js'


bookService._createDemoBooks()
const elContainer = document.getElementById('root')
const root = ReactDOM.createRoot(elContainer);
root.render(< App />);