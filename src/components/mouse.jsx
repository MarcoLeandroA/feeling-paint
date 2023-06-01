import React, { useEffect } from 'react';

function Mouse() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const el = e.target;
      const { clientHeight, clientWidth } = el;
      const { layerX, layerY } = e;
      const yRotation = ((layerX - clientWidth / 2) / clientWidth) * 20;
      const xRotation = ((layerY - clientHeight / 2) / clientHeight) * 20;
      const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg) 
        rotateY(${yRotation}deg)
      `;
      el.style.transform = string;
    };

    const handleMouseOut = (e) => {
      const el = e.target;
      el.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)`;
    };

    const el = document.getElementById('perfil');
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseout', handleMouseOut);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return null;
}

export default Mouse;
