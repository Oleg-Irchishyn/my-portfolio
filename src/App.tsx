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
import { getSites } from './redux/selectors/appSelectors';
import { SitesType } from './redux/types/types';
//@ts-ignore
import AnimatedCursor from 'react-animated-cursor';
//@ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

const App: React.FC<MapStatePropsType & MapDispatchPropsType & ownProps> = React.memo(
  ({ sites }) => {
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
          <PortFolioSlider sliderSites={sites} />
        </section>
        <Technologies />
        <Contacts />
      </div>
    );
  },
);

const mapStateToProps = (state: AppStateType) => ({
  sites: getSites(state),
});

type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
  sites: Array<SitesType>;
};

type ownProps = {
  sliderSites: Array<SitesType>;
};

export default compose<React.ComponentType>(
  connect<MapStatePropsType, MapDispatchPropsType, ownProps, AppStateType>(mapStateToProps),
  withRouter,
)(App);
