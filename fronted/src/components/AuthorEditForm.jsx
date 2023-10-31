import React, { useState } from 'react';

const AuthorEditForm = ({ author, onSave, onCancel }) => {
  const [editedAuthor, setEditedAuthor] = useState({ ...author });

  const handleSave = () => {
    onSave(editedAuthor);
  };

  return (
    <div className="container mt-4">
      <h2>Editar Autor</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={editedAuthor.name}
            onChange={(e) => setEditedAuthor({ ...editedAuthor, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nationality">Nacionalidad:</label>
          <input
            type="text"
            id="nationality"
            value={editedAuthor.nationality}
            onChange={(e) => setEditedAuthor({ ...editedAuthor, nationality: e.target.value })}
          />
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

export default AuthorEditForm;
