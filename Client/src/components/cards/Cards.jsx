import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import axios from 'axios';

const Cards = () => {
  const [properties, setProperties] = useState([]);
  const [visibleProperties, setVisibleProperties] = useState(9);
  const [showMoreButton, setShowMoreButton] = useState(true);

  useEffect(() => {
    // Aquí harás la solicitud Axios a la URL del feed XML y actualizarás el estado 'properties'.
    // Asegúrate de manejar los errores y cargar la información correctamente.
  }, []);

  const showMoreProperties = () => {
    // Incrementa el contador para mostrar más propiedades.
    // Actualiza el estado 'visibleProperties'.
  };

  return (
    <div>
      {/* Mapea las propiedades visibles y renderiza las Card */}
      {properties.slice(0, visibleProperties).map((property, index) => (
        <Card key={index} property={property} />
      ))}
      {/* Renderiza el botón "Ver más propiedades" si es necesario */}
      {showMoreButton && (
        <button onClick={showMoreProperties}>Ver más propiedades</button>
      )}
    </div>
  );
};

export default Cards;
