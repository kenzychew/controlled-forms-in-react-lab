import { useState } from 'react';
import './Bookshelf.css';

export default function Bookshelf() {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    
    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newBook.title && newBook.author) {
            setBooks([ ...books, newBook ]);
            setNewBook({ title: "", author: ""});
        }
    };
    
    return (
        <>
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    
                    <label htmlFor="title">Title: </label>
                    <input
                        id="title" 
                        value={newBook.title}
                        name="title"
                        onChange={handleInputChange}
                    />
                    
                    <label htmlFor="author">Author: </label>
                    <input
                        id="author" 
                        value={newBook.author}
                        name="author"
                        onChange={handleInputChange}
                    />
                    
                    <button type="submit" className="submitButton">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book) => 
                <div key={book.id} className="bookCard">
                    <h3>{book.title}</h3>
                    <p>by {book.author}</p>
                </div>
                )}
            </div>
        </div>
        </>
    )
      
}