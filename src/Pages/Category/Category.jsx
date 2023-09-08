import React, { useState } from 'react'
import Cards from '../../components/Cards/Cards'
import { allProduct, bigSavingZone, feedbacks } from '../../Data'
import '../../styles/category.css'
import { HiOutlineAdjustments } from 'react-icons/hi'
import { IoIosArrowDown, IoIosArrowForward, IoMdColorFill, IoMdColorFilter } from 'react-icons/io'
import { FaTshirt } from 'react-icons/fa'
import { PiHoodieFill, PiTShirtFill } from 'react-icons/pi'
import { GiHoodie, GiPoloShirt, GiPriceTag } from 'react-icons/gi'
import { RiShirtFill } from 'react-icons/ri'
import { BiColor, BiSearch } from 'react-icons/bi'

const Category = () => {
  const [data, setData] = useState(allProduct)
  const [query, setQuery] = useState('')

  const filteredCategory = (item) => {
    const result = allProduct.filter(product => {
      return product.category === item
    })
    setData(result)
  }
  const filteredTitle = (item) => {
    const result = allProduct.filter(product => {
      return product.type.toLocaleLowerCase() == item
    })
    setData(result)
  }
  const filteredPrice = (initial, price) => {
    const result = allProduct.filter(product => {
      return product.price >= initial && product.price <= price
    })
    setData(result)
  }
  const filteredColor = (color) => {
    const result = allProduct.filter(product => {
      return product.color === color
    })
    setData(result)
  }
  const searchProduct = (e) => {
    setQuery(e.target.value)
    const result = allProduct.filter(item => {
      return item.title.toLocaleLowerCase().includes(query) ||
        item.category.toLocaleLowerCase().includes(query)
    })
    setData(result)
  }

  return (
    <section className='category'>
      <div className="left">
        <div className="filter">
          <h2>Filter</h2>
          <div className="icon"><HiOutlineAdjustments /></div>
        </div>
         <ul>
          <li onClick={() => filteredTitle('top')}>
            <p><PiTShirtFill /> <span>Top</span></p>
            <span><IoIosArrowForward /></span>
          </li>
          <li onClick={() => filteredTitle('hoodie')}>
            <p><GiHoodie /> <span>Hoodie</span></p>
            <span><IoIosArrowForward /></span>
          </li>
          <li onClick={() => filteredTitle('sweater')}>
            <p><PiHoodieFill /> <span>Sweater</span></p>
            <span><IoIosArrowForward /></span>
          </li>
          <li onClick={() => filteredTitle('suit')}>
            <p><RiShirtFill /> <span>Blazers / Suit</span></p>
            <span><IoIosArrowForward /></span>
          </li>
          <li onClick={() => filteredTitle('t-shirt')}>
            <p><FaTshirt /> <span>T-shirts</span></p>
            <span><IoIosArrowForward /></span>
          </li>
          <li onClick={() => filteredTitle('tutle neck')}>
            <p><GiPoloShirt /> <span>Turtle neck Full Sleeve</span></p>
            <span><IoIosArrowForward /></span>
          </li>
         </ul>
         <div className="heading">
          <h2>Price</h2>
          <div className="icon"><GiPriceTag /></div>
         </div>
         <ul className='price-tag'>
          <label onClick={() => filteredPrice(0, 1000)}>
            <input type="radio" name='test"' />
            <span className="checkmark"></span>All
          </label>
          <label onClick={() => filteredPrice(0, 20)}>
            <input type="radio" name='test"' />
            <span className="checkmark"></span>$0 - $20
          </label>
          <label onClick={() => filteredPrice(20, 50)}>
            <input type="radio" name='test"' />
            <span className="checkmark"></span>$20 - $50
          </label>
          <label onClick={() => filteredPrice(50, 100)}>
            <input type="radio" name='test"' />
            <span className="checkmark"></span>$50 - $100
          </label>
          <label onClick={() => filteredPrice(100, 1000)}>
            <input type="radio" name='test"' />
            <span className="checkmark"></span>Over $100
          </label>
         </ul>
         <div className="heading colors">
          <h2>Colors</h2>
          <div className="icon"><IoMdColorFilter /></div>
         </div>
         <ul>
          <div className='first row'>
            <div className="color" onClick={() => filteredColor('black')}>
              <div className='black' style={{backgroundColor: 'black'}}></div>
              <p>Black</p>
            </div>
            <div className="color" onClick={() => filteredColor('grey')}>
              <div style={{backgroundColor: 'gray'}} className='gray'></div>
              <p>Gray</p>
            </div>
            <div className="color" onClick={() => filteredColor('red')}>
              <div style={{backgroundColor: 'red'}} className='red' ></div>
              <p>Red</p>
            </div>
            <div className="color" onClick={() => filteredColor('orange')}>
              <div style={{backgroundColor: 'orange'}} className='orange'></div>
              <p>Orange</p>
            </div>
          </div>
          <hr />
          <div className='second row'>
          <div className="color" onClick={() => filteredColor('darkgreen')}>
              <div style={{backgroundColor: 'darkgreen'}} className='darkGreen'></div>
              <p>Dark green</p>
            </div>
            <div className="color" onClick={() => filteredColor('white')}>
              <div style={{backgroundColor: 'white'}} className='white'></div>
              <p>White</p>
            </div>
            <div className="color" onClick={() => filteredColor('purple')}>
              <div style={{backgroundColor: 'purple'}} className='purple'></div>
              <p>Purple</p>
            </div>
            <div className="color" onClick={() => filteredColor('yellow')}>
              <div style={{backgroundColor: 'yellow'}} className='yellow'></div>
              <p>Yellow</p>
            </div>
          </div>
          <hr />
          <div className='third row'>
            <div className="color" onClick={() => filteredColor('darkred')}>
              <div style={{backgroundColor: 'darkred'}} className='darkRed'></div>
              <p>Dark red</p>
            </div>
            <div className="color" onClick={() => filteredColor('red')}>
              <div style={{backgroundColor: 'red'}} className='red'></div>
              <p>Red</p>
            </div>
            <div className="color" onClick={() => filteredColor('grey')}>
              <div style={{backgroundColor: 'gray'}} className='gray'></div>
              <p>Gray</p>
            </div>
            <div className="color" onClick={() => filteredColor('wheat')}>
              <div style={{backgroundColor: 'wheat'}} className='brown'></div>
              <p>Wheat</p>
            </div>
          </div>
         </ul>
      </div>
      <div className="right">
        <div className="head">
          <div className='list'>
            <li onClick={() => setData(allProduct)}>All Product</li>
            <li onClick={() => filteredCategory('men')}>Men</li>
            <li onClick={() => filteredCategory('women')}>Women</li>
          </div>
          <div className={`search ${query ? 'active' : ''}`}>
            <input type="text" placeholder='search product...' onChange={searchProduct} />
            <BiSearch className='icon' />
          </div>
        </div>
        <div className="main">
          {data.map(product => {
            if (product) {
              return <Cards product={{...product, rating: null }} key={product.id} />
            } else {
              <h2>hello world</h2>
            }
              })}
        </div>
      </div>
    </section>
  )
}

export default Category
