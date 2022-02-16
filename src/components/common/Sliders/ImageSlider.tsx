import React from 'react';
import imgFirst from '../../../assets/images/img_1.jpg';
import imgSecond from '../../../assets/images/img_2.jpg';
import './styles/sliders.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cn from 'classnames';

const ImageSlider: React.FC = React.memo(() => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <Slider {...settings} className={cn('images_slideShow', 'aos-item')}>
      <div data-aos="fade-up-left" data-aos-duration="500" >
        {' '}
        <img src={imgFirst} alt="my images" />
      </div>
      <div>
        {' '}
        <img src={imgSecond} alt="my images" />
      </div>
    </Slider>
  );
});

export default ImageSlider;
