import React from 'react'
import clsx from 'clsx'
import Slider from "react-slick";


import styles from './NewProducts.module.scss'
import Product from './Product/Product'
import { products } from '../../../constants'



const NewProducts = () => {

  const allProducts = products.listProducts
  const listProducts = allProducts.filter(item => item.status === 'Sản phẩm mới')
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    // <div className={styles.newProducts__wrapper}>
    //   <h1>Sản phẩm mới</h1>
    //   {/* <div className={styles.newProducts__button}>
    //     <div>
    //       <a>❮</a>
    //     </div>
    //     <div>
    //       <a>❯</a>
    //     </div>
    //   </div>
    //   <div className={clsx(styles.newProducts__items_wrapper, 'app__wrapper') }>
    // {
    //   products.map((product, index) => (
    //     <Product key={index} value={product} />
    //   ))
    // }
    //   </div> */}
    //   <SlickSlider />

    // </div>

    <div className={styles.wrapper}>
      <div className='app__wrapper'>
        <h1>Sản phẩm mới</h1>
        <Slider {...settings}>
          {
            listProducts.map((product, index) => (
              <div key={index} className={styles.item}>
                <Product value={product} />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>


  )
}

export default NewProducts