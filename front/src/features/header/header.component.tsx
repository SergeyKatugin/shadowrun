import React from 'react';
import { IconHamburger } from '@consta/icons/IconHamburger';
import { Text } from '@consta/uikit/Text';
import { block } from 'bem-cn';

import './header.scss';

const cn = block('header');

const HeaderComponent = () => {
  return (
    <div className={`container ${cn()}`}>
      <div className={cn('container')}>
        <IconHamburger size="s" />
        <Text>Shadowrun</Text>
      </div>
    </div>
  );
};

export default HeaderComponent;
