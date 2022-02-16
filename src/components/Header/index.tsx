import React from 'react';
import styles from './../../styles/components/Header.module.scss';
import cn from 'classnames';
import { Link } from 'react-scroll';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AppStateType } from '../../redux/store';
import { getLinks } from '../../redux/selectors/appSelectors';


const Header: React.FC<MapStatePropsType & MapDispatchPropsType> = React.memo(({ links }) => {
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
            const { text, dataScroll } = el;
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
        </ul>
      </div>
    </section>
  );
});

const mapStateToProps = (state: AppStateType) => ({
  links: getLinks(state),
});

type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {};

export default compose<React.ComponentType>(
  connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {}),
)(Header);
