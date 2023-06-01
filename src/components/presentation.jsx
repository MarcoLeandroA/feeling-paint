import React from 'react';
import Mouse from './Mouse'; // Asegúrate de que la ruta al componente Mouse sea correcta

export function Presentation(props) {
  return (
    <div className='container-presentation'>
      <span className='presentation-text'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </span>
      <img src="../public/images/perfil.webp" alt="perfil" id="perfil" />
      <Mouse />
    </div>
  );
}