import React from 'react'
import { AppStateType } from '../../redux/store';
import styles from './../../styles/components/Technologies.module.scss';
import cn from 'classnames';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getTechnologies } from '../../redux/selectors/appSelectors';

const Technologies: React.FC<MapStatePropsType & MapDispatchPropsType> = React.memo(({technologies}) => {
  return (
    <section id="technologies-stack" className={cn(styles.technologies, 'container')}>
      <div className={cn(styles.technologies_list)}>
      {technologies.map((item, index) => {
          const {title, image} = item;
        return <div data-aos="zoom-out-left" data-aos-duration="500" key={`${title}_${index}`} className={cn(styles.item)}>
          <img src={image} alt={title} />
        </div>
      })}
      </div>
    </section>
  )
})


const mapStateToProps = (state: AppStateType) => ({
  technologies: getTechnologies(state),
  });
  
  type MapStatePropsType = ReturnType<typeof mapStateToProps>;
  type MapDispatchPropsType = {};
  
  export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {}),
  )(Technologies);