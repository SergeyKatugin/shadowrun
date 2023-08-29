import React from 'react';
import { block } from 'bem-cn';

import './content.scss';

const cn = block('content');

const ContentComponent = () => {
  return (
    <div className={`container vertical-container ${cn()}`}>
      <div className={cn('container')}>
        <div>Content</div>
      </div>
    </div>
  );
};

export default ContentComponent;
