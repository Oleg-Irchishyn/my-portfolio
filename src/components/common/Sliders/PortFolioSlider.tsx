import React from 'react';
import Slider from 'react-slick';
import './styles/sliders.scss';
import cn from 'classnames';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SitesType } from '../../../redux/types/types';
import { PortFolioSliderItem} from '..';

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return <div data-aos="zoom-in" data-aos-duration="500" onClick={onClick} className={'slider-left-arrow'}>
    <i className="fa  fa-angle-left"></i>
  </div>;
};

const NextArrow = (props: any) => {
  const { onClick } = props;

  return <div data-aos="zoom-in" data-aos-duration="500" onClick={onClick} className={'slider-right-arrow'}>
    <i className="fa fa-angle-right"></i>
  </div>;
};

const PortFolioSlider: React.FC<ownProps> = React.memo(({sliderSites}) => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings} className={cn('portfolio__list')}>
{
  sliderSites.map((item: SitesType, index) => {
    const {title, url} = item;
    return <PortFolioSliderItem item ={item} key={`${title}_${index}`}/>
  })
}
  </Slider>;
});

type ownProps = {
  sliderSites: Array<SitesType>
}

export default PortFolioSlider;
