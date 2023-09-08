import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import '../../styles/searchbar.css'
import { allProduct } from '../../Data'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [truth, setTruth] = useState(false)

  const change = (e) => {
    setValue(e.target.value);
  };
  const onSearch = (searchItem) => {
    setValue(searchItem);
  };

  return (
    <div className='search openSearch' >
      <BiSearch className='search-icon' />
      <input type="text" value={value} onChange={change} placeholder='Search...' />
      {value && <div onClick={() => setTruth(true)} className='list'>
        {allProduct.filter((item) => {
            const searchItem = value.toLowerCase();
            const names = item.title.toLowerCase();
            return (
              searchItem && names.includes(searchItem) && names !== searchItem
            );
          })
          .slice(0, 6)
          .map((item) => {
            return (
              <>
                <Link
                  to={`/product/${item.id}`}
                  onClick={() => onSearch(item.title)}
                  key={item.id} >
                  <img loading='lazy' onClick={() => setValue(false)} src={item.image} alt="product searched image" />
                  <p>{item.title}</p>
                </Link>
              </>
            );
          })}
      </div>}
    </div>
  )
}

export default SearchBar
