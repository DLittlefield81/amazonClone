import React from 'react';
import './Home.css';
import Product from './Product.jsx';

function Home () {
  return (
    <div className="home">
      <div className="home__container">
        <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
 alt="" />
        <div className='home__row'>
          <Product id='159367' title='homejsx-product-test1' price={19.99} image='https://m.media-amazon.com/images/I/51pLgpwcGrS._AC_SY230_.jpg' rating={6} />
          <Product id='952345' title='homejsx-product-test2' price={29.99} image='https://m.media-amazon.com/images/I/51pLgpwcGrS._AC_SY230_.jpg' rating={5} />

          
        </div>
        <div className="home__row">
        <Product id='756984' title='homejsx-product-test3' price={39.99} image='https://m.media-amazon.com/images/I/51pLgpwcGrS._AC_SY230_.jpg' rating={4} />

        <Product id='456987' title='homejsx-product-test4' price={49.99} image='https://m.media-amazon.com/images/I/51pLgpwcGrS._AC_SY230_.jpg' rating={3} />

        <Product id='175943' title='homejsx-product-test5' price={59.99} image='https://m.media-amazon.com/images/I/51pLgpwcGrS._AC_SY230_.jpg' rating={2} />

        </div>
        <div className="home__row">
        <Product id='425864' title='homejsx-product-test6' price={69.99} image='https://m.media-amazon.com/images/I/51pLgpwcGrS._AC_SY230_.jpg' rating={1} />

          

        </div>

      </div>
    </div>
  );
}
export default Home;