import React from 'react'
import imgFirst from '../../../assets/images/img_1.jpg';
import imgSecond from '../../../assets/images/img_2.jpg';
import styles from './../../../styles/components/About.module.scss';
import cn from 'classnames';

const ImagesSlideShow: React.FC = () => {
    let [currentImage, setCurrentImage] = React.useState(0);

    const images: Array<string> = React.useMemo(() => [imgFirst, imgSecond], []);

    const switchImage = React.useCallback(() => {
      currentImage < images.length ? setCurrentImage(currentImage + 1) : setCurrentImage(0);
      return currentImage;
    }, []);
  
    React.useEffect(() => {
      setInterval(switchImage, 10000);
    }, []);
  return (
    <div className={cn(styles.images_slideShow)}>
    <img src={images[currentImage]} alt="my images" />
  </div>
  )
}

export default ImagesSlideShow 