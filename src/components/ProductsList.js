import React from 'react';

import Product from "./Product";
import Tags from "./Tags";

const ProductsList = ({products, isPromoted, handleBuy}) => (
    <ol style={isPromoted ? {color: "purple"} : {}}>
      {products.map(product => (
        <li key={product.id}>
          <Product name={product.name}/>
          <Tags tags={product.tags} />
          <button onClick={()=>handleBuy(product)}>Buy</button>
        </li>
      ))}
    </ol>
)

export default ProductsList;
