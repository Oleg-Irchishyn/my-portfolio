import React from 'react';
import { SitesType } from '../../../../redux/types/types';
import { ExternalLink } from 'react-external-link';
import cn from 'classnames';

const PortFolioSliderItem: React.FC<ownProps> = React.memo(({ item }) => {
  const { title, url } = item;
  return (
    <div className={cn('item')}>
      <ExternalLink title={title} href={url} rel="nofollow" className={cn('item__link')}>
        <span> {title}</span>
      </ExternalLink>
    </div>
  );
});

type ownProps = {
  item: SitesType;
};

export default PortFolioSliderItem;
