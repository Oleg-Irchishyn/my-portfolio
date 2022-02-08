import React from 'react';
import styles from './styles/components/App.module.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import{ Header, About} from './components/'
import { SliderExample } from './components/common';
import { AppStateType } from './redux/store';



const App: React.FC<MapStatePropsType & MapDispatchPropsType> = React.memo(
  () => {
    return (
      <div className={styles.App}>
        <Header />
        <About />
        <SliderExample />
      </div>
    );
  },
);

const mapStateToProps = (state: AppStateType) => ({
  
});

type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
 
};

export default compose<React.ComponentType>(
  connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, { }),
  withRouter,
)(App);
