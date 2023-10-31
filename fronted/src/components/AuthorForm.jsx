import React, { useState } from 'react';

const AuthorForm = ({ addAuthor }) => {
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || nationality.trim() === '') {
      return;
    }

    const newAuthor = {
      name,
      nationality,
    };

    addAuthor(newAuthor);

    setName('');
    setNationality('');
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Autor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre del Autor:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Nacionalidad del Autor:</label>
          <input
            type="text"
            className="form-control"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Autor</button>
      </form>
    </div>
  );
};

export default AuthorForm;
