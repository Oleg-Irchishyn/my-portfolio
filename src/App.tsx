import React from 'react';
import styles from './styles/components/App.module.scss';
import portfStyles from './styles/components/PortFolio.module.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Header, About, Technologies, Contacts } from './components/';
import { PortFolioSlider } from './components/common/';
import { AppStateType } from './redux/store';
import cn from 'classnames';
import { getWebpackSites, getReactSites } from './redux/selectors/appSelectors';
import { SitesType } from './redux/types/types';
//@ts-ignore
import AnimatedCursor from 'react-animated-cursor';
//@ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
//@ts-ignore
import { useTranslate } from 'react-redux-multilingual';

const App: React.FC<MapStatePropsType & MapDispatchPropsType & ownProps> = React.memo(
  ({ webpackSites, reactSites }) => {
    const t = useTranslate();

    React.useEffect(() => {
      AOS.init({
        debounceDelay: 50,
        once: false,
        mirror: true,
      });
    }, []);

    return (
      <div className={styles.App}>
        <AnimatedCursor
          innerSize={16}
          outerSize={16}
          color="38, 230, 230"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
        <Header />
        <About />
        <section id="portfolio" className={cn(portfStyles.portfolio)}>
          <PortFolioSlider title={t('portfolio.webpackTitle')} sliderSites={webpackSites} />
          <PortFolioSlider title={t('portfolio.reactTitle')} sliderSites={reactSites} />
        </section>
        <Technologies />
        <Contacts />
      </div>
    );
  },
);

const mapStateToProps = (state: AppStateType) => ({
  webpackSites: getWebpackSites(state),
  reactSites: getReactSites(state),
});

type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
  webpackSites: Array<SitesType>;
  reactSites: Array<SitesType>;
};

type ownProps = {
  sliderSites: Array<SitesType>;
};

export default compose<React.ComponentType>(
  connect<MapStatePropsType, MapDispatchPropsType, ownProps, AppStateType>(mapStateToProps),
  withRouter,
)(App);
