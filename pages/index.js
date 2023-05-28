import React from 'react'

//import Product from '@/components/product';
import {Product} from '../components';

import { client } from '../lib/client';

const Home = ({products}) => {
  return (
    <>
      
      <h2 className='products-heading' >index</h2>
      
      <div className="products-container">
       {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
    
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';

  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default Home ;