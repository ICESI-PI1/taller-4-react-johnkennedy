import React from 'react';

const BookList = ({ books, onEditBook, onDeleteBook }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Fecha de Lanzamiento</th>
          <th>Autor</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.releaseDate}</td>
            <td>{book.author.name}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => onEditBook(book)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDeleteBook(book)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
