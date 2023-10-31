import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Realiza la lógica de autenticación aquí, por ejemplo, llamando a una API backend
    // y pasando los datos de inicio de sesión (username y password).

    // Aquí puedes realizar la validación y autenticación del usuario.

    if (username && password) {
      onLogin({ username, password });
    } else {
      // Muestra un mensaje de error o toma otra acción apropiada.
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Inicio de Sesión</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="username">Nombre de usuario:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
