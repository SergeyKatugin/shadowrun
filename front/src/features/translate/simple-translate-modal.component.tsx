import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Text } from '@consta/uikit/Text';

import useMount from '../../hooks/use-mount.hook';
import i18n from '../../i18n';
import { SimpleViewModal } from '../modal/modal.type';
import { setSimplyView } from '../modal/store/simply-modal.slice';

const TAG_TO_TRANSLATES: Record<string, SimpleViewModal> = {
  warlock: {
    title: i18n.t('magic.warlockTitle'),
    description: i18n.t('magic.warlockDescription'),
  },
  summon: {
    title: i18n.t('magic.summonTitle'),
    description: i18n.t('magic.summonDescription'),
  },
};

type Props = {
  translateKey: string;
};

type Components = Record<string, React.ReactElement>;

const SimpleTranslateModalComponent = ({ translateKey }: Props) => {
  const dispatch = useDispatch();

  const [components, setComponents] = useState<Components | null>(null);

  useMount(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newComponents = {} as Components;

    Object.keys(TAG_TO_TRANSLATES).forEach((key) => {
      const newElement = (
        <Text
          size="s"
          decoration="underline"
          as="span"
          onClick={() => {
            const { title, description } = TAG_TO_TRANSLATES[key];

            dispatch(setSimplyView({ title, description }));
          }}
        />
      );

      newComponents[key] = newElement;
    });

    setComponents(newComponents);
  });

  if (!components) {
    return null;
  }

  return (
    <Trans
      i18nKey={translateKey}
      // eslint-disable-next-line jsx-a11y/control-has-associated-label, jsx-a11y/anchor-has-content
      components={components}
    />
  );
};

export default SimpleTranslateModalComponent;
