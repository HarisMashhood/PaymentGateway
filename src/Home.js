import React from 'react';
import './Home.css';
import Product from './Product';
import Subtotal from './Subtotal';
function Home() {
  return <div className='home'>
    <div className='home__container'>
        <div className='home__welcome'>
            <h1>Welcome to the Payment Gateway</h1>
        </div>
        <div className='home__row'>
         <Product id="1234" title="Best Body perfume for men with long lasting fragnance" price={29.99}
          image='https://www.clippingpathsource.com/wp-content/uploads/2018/07/Product-Photographu-In-Black-Background.png' />
         <Product id="1423" title="HP Pavilion Gaming 10th Gen Intel Core i5 15.6-inch (39.6 cms) FHD Gaming Laptop (8GB/256GB SSD + 1TB HDD)" price={29.99} image='https://th.bing.com/th/id/OIP.KugbApeXAaQzmTVYcUyQbQHaEK?pid=ImgDet&rs=1' />
         <Product id="4132" title="KELVEE Random Design Glass Straw Measuring Drinking Mug with Handle and Clear Lid with Scale Straw for Multiple Usage 350 ml (Pack of 2)" price={29.99} image='https://m.media-amazon.com/images/I/51R5G379f3L.jpg' />
        </div>
        <div className="subtotal2">
          <Subtotal/>
      </div>
        {/*<button onClick={e=> history.push('/payment')} className='button__down'>Go To Payment Page</button>*/}
     
    </div>
  </div>;
}

export default Home;
