import React, { MouseEvent, PropsWithChildren } from 'react';
import { block } from 'bem-cn';

import { UiSize, UiView } from '../../types/ui.type';

import './button.scss';

const cn = block('button');

type Props = {
  view?: UiView;
  size?: UiSize;
  wide?: boolean;
  onClick?: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => void;
};

const UiButton = ({
  wide,
  onClick,
  view,
  size,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={cn({ wide, view: view || 'primary', size: size || 'm' })}
      type="button"
      onClick={onClick ? (event) => onClick(event) : undefined}
    >
      {children}
    </button>
  );
};

export default UiButton;
