import React from 'react';

const Jumbotron = () => {
  return (
    <div className="bg-light p-5 mb-4">
      <div className="container">
        <h1 className="display-4">Bien benido a mi web</h1>
        <p className="lead">Esto es una prueba para hacer una landing page con React</p>
        <a className="btn btn-primary btn-lg" href="#learn-more" role="button">Pulsa el boton pero no hace nada</a>
      </div>
    </div>
  );
}

export default Jumbotron;