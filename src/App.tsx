import React from 'react';
import styles from './styles/components/App.module.scss';
import portfStyles from './styles/components/PortFolio.module.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Header, About } from './components/';
import { PortFolioSlider } from './components/common';
import { AppStateType } from './redux/store';
import cn from 'classnames';
import { getSites } from './redux/selectors/appSelectors';
import { SitesType } from './redux/types/types';

const App: React.FC<MapStatePropsType & MapDispatchPropsType & ownProps> = React.memo(({sites}) => {
  return (
    <div className={styles.App}>
      <Header />
      <About />
      <section id="portfolio" className={cn(portfStyles.portfolio)}>
        <PortFolioSlider  sliderSites={sites}/>
      </section>
    </div>
  );
});

const mapStateToProps = (state: AppStateType) => ({
  sites: getSites(state)
});

type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
  sites: Array<SitesType>
};

type ownProps = {
  sliderSites: Array<SitesType>
}

export default compose<React.ComponentType>(
  connect<MapStatePropsType, MapDispatchPropsType, ownProps, AppStateType>(mapStateToProps,),
  withRouter,
)(App);
