import React, { useState } from 'react';

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || releaseDate.trim() === '' || author.trim() === '') {
      return;
    }

    const newBook = {
      title,
      releaseDate,
      author,
    };

    addBook(newBook);

    setTitle('');
    setReleaseDate('');
    setAuthor('');
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Libro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título del Libro:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Fecha de Publicación:</label>
          <input
            type="date"
            className="form-control"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Autor:</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Libro</button>
      </form>
    </div>
  );
};

export default BookForm;
