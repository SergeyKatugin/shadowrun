import React from 'react';
import { useSelector } from 'react-redux';
import { IconArrowLeft } from '@consta/icons/IconArrowLeft';
import { block } from 'bem-cn';

import UiButton from '../../ui/button/button.component';

import { selectorFooter } from './footer.selector';

import './footer.scss';

const cn = block('footer');

const FooterComponent = () => {
  const footer = useSelector(selectorFooter);

  function handleFooterClick(): void {
    if (footer?.action) {
      footer.action();
    }
  }

  function handleBackClick(): void {
    if (footer?.backAction) {
      footer.backAction();
    }
  }

  if (footer.text === undefined) {
    return null;
  }

  return (
    <div className={cn()}>
      <div className={`${cn('container')} container`}>
        {footer.backAction ? (
          <IconArrowLeft onClick={() => handleBackClick()} />
        ) : null}
        <UiButton
          wide
          onClick={() => handleFooterClick()}
          size="s"
          view="primary"
        >
          {footer.text}
        </UiButton>
      </div>
    </div>
  );
};

export default FooterComponent;
