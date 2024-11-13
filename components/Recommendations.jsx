import React from 'react';

const Recommendations = ({ products }) => {
  return (
    <div>
      <h2>Recommended Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.node.id}>
            <h3>{product.node.title}</h3>
            <p>{product.node.descriptionHtml}</p>
            <p>
              Price: {product.node.priceRange.minVariantPrice.amount}{' '}
              {product.node.priceRange.minVariantPrice.currencyCode}
            </p>
            <img src={product.node.images.edges[0].node.src} alt={product.node.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
