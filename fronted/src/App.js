import './App.css';

import AuthorList from './components/AuthorList';
import BookList from './components/BookList';
import AuthorForm from './components/AuthorForm';
import BookForm from './components/BookForm';
import AuthorEditForm from './components/AuthorEditForm';
import BookEditForm from './components/BookEditForm';
import LoginForm from './components/LoginForm';

import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {

  
  const initialAuthors = [
    { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' },
    { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2' },
  ];

  const initialBooks = [
    { id: 1, title: 'Libro 1', releaseDate: '2023-01-01', author: initialAuthors[0] },
    { id: 2, title: 'Libro 2', releaseDate: '2023-02-01', author: initialAuthors[1] },
  ];

  const [authors, setAuthors] = useState(initialAuthors);
  const [books, setBooks] = useState(initialBooks);
  const [view, setView] = useState('authors');
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [authorBooks, setAuthorBooks] = useState([]);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    
    setUser(userData);
  }


  const addAuthor = (newAuthor) => {
    const newAuthorWithId = { ...newAuthor, id: authors.length + 1 };
    setAuthors([...authors, newAuthorWithId]);
  };

  const onSaveAuthor = (updatedAuthor) => {
    const updatedAuthors = authors.map((author) => (author.id === updatedAuthor.id ? updatedAuthor : author));
    setAuthors(updatedAuthors);
    setSelectedAuthor(null);
  };

  const onCancelEdit = () => {
    setSelectedAuthor(null);
  };
  const onEditAuthor = (author) => {
    setSelectedAuthor(author);
  }

  const onDeleteAuthor = (authorToDelete) => {
    const updatedAuthors = authors.filter((author) => author.id !== authorToDelete.id);
    setAuthors(updatedAuthors);
  };

  const addBook = (newBook) => {
    const newBookWithId = { ...newBook, id: books.length + 1 };
    setBooks([...books, newBookWithId]);
  };

  const onEditBook = (book) => {
    setSelectedBook(book);
  };
  
  const onDeleteBook = (bookToDelete) => {
    const updatedBooks = books.filter((book) => book.id !== bookToDelete.id);
    setBooks(updatedBooks);
  };

  const onSaveBook = (updatedBook) => {
    const updatedBooks = books.map((book) => (book.id === updatedBook.id ? updatedBook : book));
    setBooks(updatedBooks);
    setSelectedBook(null);
  };

  const viewAuthorBooks = (authorId) => {
    const booksByAuthor = books.filter((book) => book.author.id === authorId);
    setAuthorBooks(booksByAuthor);
    setView('authorBooks'); 
  };
  

  if (!user) {
    return (
      <div className="App">
        <LoginForm onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container mt-4">
        <div className="btn-group">
          <button
            className={`btn ${view === 'authors' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setView('authors')}
          >
            Autores
          </button>
          <button
            className={`btn ${view === 'books' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setView('books')}
          >
            Libros
          </button>
        </div>
      </div>

      {view === 'authors' && (
        <div className="container mt-4">
          {selectedAuthor ? (
            <AuthorEditForm author={selectedAuthor} onSave={onSaveAuthor} onCancel={onCancelEdit} />
          ) : (
            <>
              <AuthorList authors={authors} onEditAuthor={onEditAuthor} onDeleteAuthor={onDeleteAuthor} viewAuthorBooks={viewAuthorBooks} />
              <AuthorForm addAuthor={addAuthor} />
            </>
          )}
        </div>
      )}


{view === 'books' && (
  <div className="container mt-4">
    {selectedBook ? (
      <BookEditForm book={selectedBook} onSave={onSaveBook} onCancel={onCancelEdit} authors={authors} />
    ) : (
      <>
        <BookList books={books} onEditBook={onEditBook} onDeleteBook={onDeleteBook} />
        <BookForm addBook={addBook} />
      </>
    )}
  </div>
)}
{view === 'authorBooks' && (
  <div className="container mt-4">
    <h2>Libros del Autor</h2>
    <BookList books={authorBooks} />
  </div>
)}


    </div>
  );
}

export default App;
