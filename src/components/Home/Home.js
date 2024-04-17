import React, { useEffect, useState } from 'react'
import './home.scss'
import Carousel from 'react-material-ui-carousel'
import ImgWomen1 from '../../images/carousel-women/1.jpg'
import ImgWomen2 from '../../images/carousel-women/2.jpg'
import ImgWomen3 from '../../images/carousel-women/3.jpg'
import ImgMen1 from '../../images/carousel-men/1.jpg'
import ImgMen2 from '../../images/carousel-men/2.jpg'
import ImgMen3 from '../../images/carousel-men/3.jpg'

const Home = ({ currentGender}) => {
    return (
    <div className='home'>
        { currentGender == 'WOMEN' ? 
            (<Carousel
                centerMode={true} 
                centerSlidePercentage={100} 
                indicators={false}
                interval='6000'
                className='my-carousel'
            >
                <img src={ImgWomen1} className='carousel-img' alt="" />
                <img src={ImgWomen2} className='carousel-img' alt="" />
                <img src={ImgWomen3} className='carousel-img' alt="" />
            </Carousel>) :
            (<Carousel
                centerMode={true} 
                centerSlidePercentage={80} 
                indicators={false}
                className='my-carousel'
            >
                <img src={ImgMen1} className='carousel-img' alt="" />
                <img src={ImgMen2} className='carousel-img' alt="" />
                <img src={ImgMen3} className='carousel-img' alt="" />
            </Carousel>)
        }
    </div>
    )
}

export default Home