import React from 'react';
import { useSelector } from 'react-redux';
import { IconArrowLeft } from '@consta/icons/IconArrowLeft';
import { Button } from '@consta/uikit/Button';
import { block } from 'bem-cn';

import { selectorFooter } from './footer.selector';

import './footer.scss';

const cn = block('footer');

const FooterComponent = () => {
  const { action, backAction, disabled, text } = useSelector(selectorFooter);

  function handleFooterClick(): void {
    if (action) {
      action();
    }
  }

  function handleBackClick(): void {
    if (backAction) {
      backAction();
    }
  }

  if (text === undefined) {
    return null;
  }

  return (
    <div className={cn()}>
      <div className={`${cn('container')} container`}>
        {backAction ? (
          <IconArrowLeft onClick={() => handleBackClick()} />
        ) : null}
        <Button
          width="full"
          onClick={() => handleFooterClick()}
          size="s"
          view="primary"
          disabled={disabled}
          label={text}
        />
      </div>
    </div>
  );
};

export default FooterComponent;
