import React, { useState } from 'react';

const Buscador = ({ filtrarColaboradores }) => {
  // Estado local para el término de búsqueda
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  // Función para manejar cambios en el input
  const handleChange = (e) => {
    // Actualizar el estado del término de búsqueda
    setTerminoBusqueda(e.target.value);
    // Llamar a la función de filtrado con el nuevo término de búsqueda
    filtrarColaboradores(e.target.value);
  };

  return (
    <div>
      <h2>Buscar colaborador</h2>
      <input
        type="text"
        placeholder="Ingrese el término de búsqueda"
        value={terminoBusqueda}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
};

export default Buscador;