import React from 'react';
import styles from './../../styles/components/Contacts.module.scss';
import { ExternalLink } from 'react-external-link';
import cn from 'classnames';

const Contacts: React.FC = React.memo(() => {
  return (
    <section data-aos="zoom-in-down" data-aos-duration="500" className={cn(styles.contacts)}>
      <div className={'container'}>
        <ul  id="contacts" className={cn(styles.contacts__list)}>
          <li >
          <b>LinkedIn:</b>
            {' '}
            <ExternalLink
              title={'linkedIn'}
              href={'https://linkedin.com/in/oleg-irchishyn-257bab94'}
              rel="nofollow"
              className={cn(styles.item)}>
                  <span>profile</span>
              </ExternalLink>
          </li>
          <li >
            <b>Skype:</b> <span>live:.cid.c717d8523ec917d7</span>
          </li>
          <li >
            <b>E-mail:</b>
            <span>oleg.irchishyn91@gmail.com</span>
          </li>
          <li >
            <b>Number:</b>
            <span>+38 (063) 978 95 68</span>
          </li>
        </ul>
      </div>
    </section>
  );
});

export default Contacts;
