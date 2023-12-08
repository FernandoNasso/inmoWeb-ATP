import React from 'react';
import styles from './Card.module.css'; // Asegúrate de importar tus estilos

const Card = ({ property }) => {
  // Extrae la información específica de la propiedad
  const {
    image,
    price,
    currency,
    type,
    expensas,
    address,
    city,
    region,
    propertyType,
    rooms,
    bathrooms,
    plotArea,
  } = property;

  return (
    <div className={styles.cardContainer}>
      <img src={image} alt="Property" className={styles.propertyImage} />

      <div className={styles.propertyDetails}>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{`${price} ${currency}`}</span>
          <span className={styles.type}>{type}</span>
        </div>

        {expensas && <span className={styles.expensas}>{`Expensas: ${expensas}`}</span>}

        <div className={styles.addressContainer}>
          <span className={styles.address}>{address}</span>
          <span className={styles.cityRegion}>{`${city}, ${region}`}</span>
        </div>

        <div className={styles.propertyInfo}>
          <span>{`${propertyType} | ${rooms} ambientes | ${bathrooms} baños`}</span>
          <span>{`M2 Total: ${plotArea} | ${rooms} dormitorios | ${bathrooms} baños`}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
