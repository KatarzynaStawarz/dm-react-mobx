import Product from "./Product";
import React from "react";

const Basket = ({products, onAdd, onRemove, soldProductsPriceSum}) => (
  <React.Fragment>
  <ul>
    {products.map(product => (
      <li key={product.id}>
        <Product name={product.name}/>
        <button onClick={()=>onAdd(product)}>Add one more</button>
        <button onClick={()=>onRemove(product)}>Remove</button>
      </li>
    ))}
  </ul>
    <span>Sum of your purchases: {soldProductsPriceSum}</span>
  </React.Fragment>
)

export default Basket;
