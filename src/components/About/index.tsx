import React from 'react';
import styles from './../../styles/components/About.module.scss';
import { ReactTypical } from '@deadcoder0904/react-typical';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import  ImageSlider  from '../../components/common/Sliders/ImageSlider';
import cn from 'classnames';
import 'overlayscrollbars/css/OverlayScrollbars.css';
//@ts-ignore
import { useTranslate } from 'react-redux-multilingual'

const About: React.FC = React.memo(() => {
  const t = useTranslate()
  return (
    <section id="about" className={cn(styles.about)}>
      <div data-aos="flip-up" data-aos-duration="500" className={cn(styles.about__top_content, 'container', 'aos-item')}>
        <ReactTypical
          steps={[
            t('greetingsLine.first'),
            1000,
            t('greetingsLine.second'),
            1000,
            t('greetingsLine.third'),
            1000,
            t('greetingsLine.fourth'),
            1000,
          ]}
          loop={1}
          wrapper="div"
        />
      </div>
      <div className={cn(styles.about__bottom_content, 'container')}>
        <ImageSlider />
        <OverlayScrollbarsComponent >
          <p data-aos="flip-down" data-aos-duration="500"> {t('aboutText.1')}</p>
          <p data-aos="flip-down" data-aos-duration="500">{t('aboutText.2')}</p>
          <p data-aos="flip-down" data-aos-duration="500"> {t('aboutText.3')}</p>
          <p data-aos="flip-down" data-aos-duration="500">{t('aboutText.4')}</p>
          <p data-aos="flip-down" data-aos-duration="500">{t('aboutText.5')}</p>
          <p data-aos="flip-down" data-aos-duration="500">{t('aboutText.6')}</p>
        </OverlayScrollbarsComponent>
      </div>
    </section>
  );
});

export default About;
