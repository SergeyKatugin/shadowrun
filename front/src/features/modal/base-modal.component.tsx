import React, { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { IconClose } from '@consta/icons/IconClose';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
import { block } from 'bem-cn';

import './base-modal.scss';

const cn = block('base-modal');

type Props = {
  isOpened: boolean;
  title: string;
  handleClose: () => void;
};

const BaseModalComponent = ({
  isOpened,
  title,
  handleClose,
  children,
}: PropsWithChildren<Props>) => {
  const { t } = useTranslation();

  if (!isOpened) {
    return null;
  }

  return (
    <div className={cn()}>
      <div className={cn('close')}>
        <Button onlyIcon iconLeft={IconClose} onClick={handleClose} size="xs" />
      </div>

      <Text className={`vertical-container ${cn('title')}`}>{title}</Text>

      <div className={cn('body')}>{children}</div>

      <div className={cn('footer')}>
        <Button
          size="s"
          width="full"
          onClick={handleClose}
          label={t('close')}
        />
      </div>
    </div>
  );
};

export default BaseModalComponent;
