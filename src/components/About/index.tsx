import React from 'react';
import styles from './../../styles/components/About.module.scss';
import { ReactTypical } from '@deadcoder0904/react-typical';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import  ImageSlider  from '../../components/common/Sliders/ImageSlider';
import cn from 'classnames';
import 'overlayscrollbars/css/OverlayScrollbars.css';

const About: React.FC = React.memo(() => {
  return (
    <section id="about" className={cn(styles.about)}>
      <div data-aos="flip-up" data-aos-duration="500" className={cn(styles.about__top_content, 'container', 'aos-item')}>
        <ReactTypical
          steps={[
            `HI, Pleasure to meet you 👋`,
            1000,
            `I am Oleg, a Front-end developer with experience in Vanilla JS and ReactJS 💖`,
            1000,
            `Below, you may find more info about me and my projects 👇`,
            1000,
            `Hope, you will enjoy them 😎`,
            1000,
          ]}
          loop={1}
          wrapper="div"
        />
      </div>
      <div className={cn(styles.about__bottom_content, 'container')}>
        <ImageSlider />
        <OverlayScrollbarsComponent >
          <p data-aos="flip-down" data-aos-duration="500"> Outsource company or a product one is not a concern to me.</p>
          <p data-aos="flip-down" data-aos-duration="500">I am looking for the company, that would give me an opportunity to grow and learn. </p>
          <p data-aos="flip-down" data-aos-duration="500">
            {' '}
            The most important moment for me is communication within the development team and
            clients.{' '}
          </p>
          <p data-aos="flip-down" data-aos-duration="500">Bad management causes a lot of issues, as well as bad code. </p>
          <p data-aos="flip-down" data-aos-duration="500">
            Whether I will be coding websites or web services, all I want is to sharpen my skills
            and learn JS and ReactJS on real projects.{' '}
          </p>
          <p data-aos="flip-down" data-aos-duration="500">
            The end goal is to become an outstanding developer, who will participate in difficult
            projects, which will bring profit to a company and satisfaction to me.
          </p>
        </OverlayScrollbarsComponent>
      </div>
    </section>
  );
});

export default About;
