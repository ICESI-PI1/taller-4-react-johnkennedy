import React, { useState } from 'react';

const BookEditForm = ({ book, onSave, onCancel, authors }) => {
    const [editedBook, setEditedBook] = useState({ ...book });

  const handleSave = () => {
    onSave(editedBook);
  };

  return (
    <div className="container mt-4">
      <h2>Editar Libro</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={editedBook.title}
            onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="releaseDate">Fecha de Lanzamiento:</label>
          <input
            type="date"
            id="releaseDate"
            value={editedBook.releaseDate}
            onChange={(e) => setEditedBook({ ...editedBook, releaseDate: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Autor:</label>
          <select
            id="author"
            value={editedBook.author.id}
            onChange={(e) => {
              const authorId = parseInt(e.target.value);
              const selectedAuthor = authors.find((author) => author.id === authorId);
              setEditedBook({ ...editedBook, author: selectedAuthor });
            }}
          >
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" onClick={handleSave}>
          Guardar
        </button>
        <button className="btn btn-secondary" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default BookEditForm;
