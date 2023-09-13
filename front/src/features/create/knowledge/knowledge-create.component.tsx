import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Text } from '@consta/uikit/Text';

import { RouteName } from '../../../constants/route.constant';
import useMount from '../../../hooks/use-mount.hook';
import { setFooter } from '../../footer/footer.slice';

const KnowledgeCreateComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useMount(() => {
    dispatch(
      setFooter({
        text: t('menu.knowledgeNext'),
        action: () => {
          navigate(RouteName.ResourceCreate);
        },
        backAction: () => {
          navigate(-1);
        },
      }),
    );
  });

  return (
    <>
      <Text size="xl" as="h1" className="mb-s">
        {t('knowledge.title')}
      </Text>
      <Text size="s" as="span" className="mb-s">
        {t('knowledge.description')}
      </Text>
    </>
  );
};

export default KnowledgeCreateComponent;
