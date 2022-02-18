import React from 'react';
import styles from './../../styles/components/Header.module.scss';
import {LanguagePicker} from '../'
import cn from 'classnames';
import { Link } from 'react-scroll';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AppStateType } from '../../redux/store';
import { getActiveLanguage, getLinks } from '../../redux/selectors/appSelectors';
import {actions} from '../../redux/reducers/appReducer'
//@ts-ignore
import { useTranslate } from 'react-redux-multilingual'


const Header: React.FC<MapStatePropsType & MapDispatchPropsType> = React.memo(({ links,  activeLang, setActiveLanguage }) => {
  const t = useTranslate()
  const [activeBurger, setActiveBurger] = React.useState(false);
  const [activeNavList, setActiveNavList] = React.useState(false);

  const headerNavList = React.useRef<HTMLUListElement>(null);

  const handleBurgerOutsideClick = React.useCallback(
    (activeBurger, activeNavList) => {
      setActiveBurger(!activeBurger);
      setActiveNavList(!activeNavList);
    },
    [activeBurger, activeNavList],
  );

  const handleNavListOutsideClick = React.useCallback(
    (e: any) => {
      const path = e.path || (e.composedPath && e.composedPath());
      if (!path.includes(headerNavList.current)) {
        handleBurgerOutsideClick(activeBurger, activeNavList);
      }
    },
    [activeBurger, activeNavList],
  );

  React.useEffect(() => {
    document.body.addEventListener('click', handleNavListOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleNavListOutsideClick);
    };
  }, [handleNavListOutsideClick]);

  return (
    <section className={cn(styles.header)}>
      <div data-aos="fade-up" data-aos-duration="500"  className={cn(styles.header__nav)}>
        <div
          onClick={() => handleBurgerOutsideClick(activeBurger, activeNavList)}
          className={cn(styles.burger_menu, {
            [styles.active_burger]: activeBurger,
          })}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          ref={headerNavList}
          className={cn(styles.header__nav_list, {
            [styles.active_dropdown]: activeNavList,
          })}>
          {links.map((el, index) => {
            let { text, dataScroll } = el;
           
            if( index === 0) {
              text = t('headerNav.about')
            } else if ( index === 1) {
              text = t('headerNav.porftfolio')
            }
            else if ( index === 2) {
              text = t('headerNav.technologiesStack')
            }
            else if ( index === 3) {
              text = t('headerNav.contacts')
            }
            return (
              <li key={`${text}_${index}`}>
                <Link
                  to={dataScroll}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  delay={0}
                  onClick={() => handleBurgerOutsideClick(activeBurger, activeNavList)}>
                  {text}
                </Link>
              </li>
            );
          })}

<LanguagePicker activeLang={activeLang} setActiveLanguage={setActiveLanguage}/>
        </ul>
      </div>
    </section>
  );
});

const mapStateToProps = (state: AppStateType) => ({
  links: getLinks(state),
  activeLang: getActiveLanguage(state)
});

type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
  setActiveLanguage: (lang: string) => void
};

export default compose<React.ComponentType>(
  connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    setActiveLanguage: actions.setActiveLanguage
  }),
)(Header);
