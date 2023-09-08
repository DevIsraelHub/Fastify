import React from 'react'
import Hero from '../../components/Hero/Hero'
import yellow from '../../Images/yellow.png';
import purple from '../../Images/purple.png';
import { Link } from 'react-router-dom';
import '../../styles/home.css'
import { allProduct, bigSavingZone, feedbacks } from '../../Data';
import NewArrival from '../../components/NewArrival/NewArrival';
import BigSavingZone from '../../components/BigSavingZone/BigSavingZone';
import Cards from '../../components/Cards/Cards';
import nike from '../../Images/nike.png'
import puma from '../../Images/puma.png'
import polo from '../../Images/polo.png'
import hm from '../../Images/hm.png'
import levi from '../../Images/levi.jpg'
import Feedback from '../../components/Feedback/Feedback';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Home = () => {
  
  const newArrival = allProduct.filter((item, index) => index < 14)
  const forMen = allProduct.filter(item => item.category === 'men')
  const forWomen = allProduct.filter(item => item.category === 'women')
  return (
    <div className='home' id='home'>
      <>
    </>
      <Hero />
      <section className="section">
        <div className="container">
          <div className="first">
            {/* <Swiper
              spaceBetween={35}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper> */}
            <div className="card">
              <img loading='lazy' src={yellow} alt="" />
              <div className='text'>
                <h4>Low Price</h4>
                <h2>High Coziness</h2>
                <p>UPTO 50% OFF</p>
                <Link to={''}>Explore Item</Link>
              </div>
            </div>
            <div className="card purple">
              <img loading='lazy' src={purple} alt="" />
              <div className='text'>
                <h4>Beyond Presents</h4>
                <h2>Breezy Summer Style</h2>
                <p>UPTO 50% OFF</p>
                <Link to={'/product/1'}>Explore Item</Link>
              </div>
            </div>
          </div>
          <div className="second">
            <h1>New Arrival</h1>
            <Swiper
            spaceBetween={35}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              540: {
                slidesPerView: 2, 
                spaceBetween: 35,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 35,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 40,
              }
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper newArrival"
            >
              {newArrival.map(product => {
               return (
                <SwiperSlide key={product.id}>
                  <NewArrival product={product} key={product.id} />
                </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className="third">
            <h1>Big Saving Zone</h1>
            <div className='bigSaving'>
              {bigSavingZone.map(product => {
                return <BigSavingZone product={product} key={product.id} />
              })}
            <span id='men'></span>
            </div>
          </div>
          <div className="fourth">
            <h1>Men's Wear</h1>
            <div className="forMen">
              {forMen.map(product => {
                return <Cards product={product} key={product.id} />
              })}
            </div>
          </div>
          <div className="sponsor">
            <div className='text'>
              <h1>Top Brands Deal</h1>
              <p>Up To <span>60% </span>off on brands</p>
            </div> 
            <div className='logos'>
              <div className="logo">
                <img loading='lazy' src={nike} alt="nike logo" />
              </div>
              <div className="logo">
                <img loading='lazy' src={levi} alt="balenciaga logo" />
              </div>
              <div className="logo">
                <img loading='lazy' src={hm} alt="H&M logo" />
              </div>
              <div className="logo">
                <img loading='lazy' src={polo} alt="levi's logo" />
              </div>
              <div className="logo">
                <img loading='lazy' src={puma} alt="puma logo" />
              </div>
            </div>
            <span id='women'></span>
          </div>
          <div className="fourth">
            <h1>Women's Wear</h1>
            <div className="forMen">
              {forWomen.map(product => {
                return <Cards product={product} key={product.id} />
              })}
            </div>
          </div>
          <div className="sixth">
            <h1>Feedbacks</h1>
            <Swiper 
              spaceBetween={35}
              breakpoints={{
                540: {
                  slidesPerView: 1, 
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                }
              }}
              pagination={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper feedbacks">
              {feedbacks.map(person => {
                return (
                  <SwiperSlide>
                    <Feedback person={person} key={person.id} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
