import React from 'react';

const AuthorList = ({ authors, onEditAuthor, onDeleteAuthor, viewAuthorBooks }) => {
  return (
    <ul className="list-group">
      {authors.map((author) => (
        <li key={author.id} className="list-group-item d-flex justify-content-between align-items-center">
          {author.name} ({author.nationality})
          <span>
            <button
              className="btn btn-info btn-sm mx-2"
              onClick={() => viewAuthorBooks(author.id)}
            >
              Ver Libros
            </button>
            <button
              className="btn btn-warning btn-sm mx-2"
              onClick={() => onEditAuthor(author)}
            >
              Editar
            </button>
            <button
              className="btn btn-danger btn-sm mx-2"
              onClick={() => onDeleteAuthor(author)}
            >
              Eliminar
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default AuthorList;
