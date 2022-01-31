import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
function Product({id,title, image, price}) {

    const [{basket} , dispatch] = useStateValue();
    console.log("this is basket", basket);
    const addToBasket =() =>{
        dispatch({
            type: 'Add to Basket',
            item:{
                id:id,
                title: title,
                image: image,
                price:price,
            },
        });
    };

  return <div className='product'>
      <div className='product__info'>
          <p>{title}</p>
          <strong>{price}</strong>
      </div>

      <img src={image} alt=''/>
       
      <button onClick={addToBasket}>Add Product</button>
  </div>;
}

export default Product;
