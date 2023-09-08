import React, { useContext } from 'react'
import Rating from '../../components/Rating/Rating'
import { FiShoppingCart } from 'react-icons/fi'
import { useState } from 'react'
import Cards from '../../components/Cards/Cards'
import { allProduct, newArrivals } from '../../Data'
import { useParams } from 'react-router-dom'
import '../../styles/ProductDetails.css'
import { FaEye, FaPlay } from 'react-icons/fa'
import { CartContext } from '../../Context/CartContext'

const ProductDetail = () => {
  const { addToCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1)

  const { id } = useParams()
  // getting the single product based on the id
  const product = allProduct.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not defined
  if (!product)
  {
    return (
      <section className="loading">
        Loading...
      </section>
    );
  }


  const { image, title, category, color, rating, price, desc, amount } = product;
  const filtered = allProduct.filter(item => {
    return item.category === category
  })

  return (
    <section className='product-details'>
      <div className='product' key={id}>
        <div className='top'>
          <div className="img">
            <img src={image} alt="product image" />
          </div>
          <div className="info">
            <p className="reference">{`Shop >  ${category} > `}<b>{title}</b></p>
            <h2 className="title">{title}</h2>
            <div className="ratings"><Rating rates={rating} text={'Star rating'} /></div>
            <div className='amount'>
              <h3>Price: <span>${price}</span></h3>
            </div>
            <div className="size">
              <h4>Select Size :</h4>
              <div className="sizes">
                <div>XS</div>
                <div>S</div>
                <div className='active'>M</div>
                <div>L</div>
                <div>XL</div>
              </div>
            </div>
            <div className="color">
              <h4>Color :</h4>
              <div className='flex'>
                <div className='bg' style={{ backgroundColor: color }}></div>
                <p>{color}</p>
              </div>
            </div>
            <div className="btns">
              <button
                onClick={() => addToCart(product, product.id)}
                className='cartBtn'><FiShoppingCart /> Add to cart</button>
            </div>
          </div>
        </div>

        {/*********************** M I D D L E *****************************/}

        <div className="middle">
          <h2>Product Description</h2>
          <div className="container">
            <div className="desc">
              <p>{desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi, omnis facere eum, qui consequatur voluptas commodi ullam totam asperiores maxime eveniet corrupti harum quos recusandae corporis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi, omnis facere eum, qui consequatur voluptas commodi ullam totam asperiores maxime eveniet corrupti harum quos recusandae corporis.</p>
            </div>
            <div className="video">
              <div className="overlay"></div>
              <img src={image} alt="product video image" />
              <div className="info">
                <p className='views'><FaEye /> {parseInt(price)}k</p>
                <div className="icon"><FaPlay /></div>
                <p className='text'>{title}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <h1 className="title">Featured Products</h1>
          <div className="similar">
            {filtered.map(product => {
              return <Cards product={product} key={product.id} />
            })}
          </div>
        </div>
      </div>
    </section>

  )

}

export default ProductDetail
