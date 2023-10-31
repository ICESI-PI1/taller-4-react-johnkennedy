import React from 'react';

const AuthorBooks = ({ author, books }) => {
  const authorBooks = books.filter((book) => book.author.id === author.id);

  return (
    <div className="container mt-4">
      <h2>Libros de {author.name}</h2>
      <ul className="list-group">
        {authorBooks.map((book) => (
          <li key={book.id} className="list-group-item">
            <strong>{book.title}</strong> - Fecha de Publicación: {new Date(book.releaseDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorBooks;
