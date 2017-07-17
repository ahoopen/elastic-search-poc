import React from 'react';

export const Product = ({description, price}) => (
    <div className="product">
        <img className="product-image" alt="product" src="https://www.ah.nl.kpnis.nl/static/product/AHI_434d50323533323234_3_200x200_JPG.JPG"/>
        <div className="product-content">
            <div className="product-description">{description}</div>
            <div className="product-price">{price}</div>
        </div>
    </div>
);
