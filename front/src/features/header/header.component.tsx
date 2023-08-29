import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconAdd } from '@consta/icons/IconAdd';
import { IconHamburger } from '@consta/icons/IconHamburger';
import { Text } from '@consta/uikit/Text';
import { block } from 'bem-cn';

import { RouteName } from '../../constants/route.constant';

import './header.scss';

const cn = block('header');

const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <div className={`container vertical-container ${cn()}`}>
      <div className={cn('container')}>
        <IconHamburger size="s" />
        <Text>Shadowrun</Text>
        <IconAdd size="s" onClick={() => navigate(RouteName.Common)} />
      </div>
    </div>
  );
};

export default HeaderComponent;
