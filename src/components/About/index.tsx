import React from 'react';
import styles from './../../styles/components/About.module.scss';
import { ReactTypical } from '@deadcoder0904/react-typical';
import cn from 'classnames';

const About: React.FC = () => {
  return (
    <section id="about" className={cn(styles.about)}>
      <div className={cn(styles.about__top_content, 'container')}>
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
          loop={Infinity}
          wrapper="div"
        />
      </div>
    </section>
  );
};

export default About;
