import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Slider } from '@consta/uikit/Slider';
import { Text } from '@consta/uikit/Text';

import { RouteName } from '../../../constants/route.constant';
import useMount from '../../../hooks/use-mount.hook';
import {
  SETTABLE_ATTRIBUTES,
  SETTABLE_ATTRIBUTES_TO_NAME,
} from '../../attribute/attribute.constant';
import { AttributeLevel } from '../../attribute/attribute.type';
import {
  selectorCharacter,
  selectorLeftAttributes,
} from '../../character/character.selector';
import { changeCharacterAttribute } from '../../character/character.slice';
import { setFooter, setFooterDisabled } from '../../footer/footer.slice';
import { usePriority } from '../priority/priority.hook';

const AttributeCreateComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSelectedPriority } = usePriority('attributes');

  const character = useSelector(selectorCharacter);
  const leftAttributes = useSelector(selectorLeftAttributes);

  useMount(() => {
    dispatch(
      setFooter({
        text: t('attributeNext'),
        action: () => {
          navigate(RouteName.SkillCreate);
        },
        backAction: () => {
          navigate(-1);
        },
      }),
    );
  });

  useEffect(() => {
    if (leftAttributes <= 0) {
      dispatch(setFooterDisabled(true));
    } else {
      dispatch(setFooterDisabled(false));
    }
  }, [dispatch, leftAttributes]);

  return (
    <>
      <Text size="xl" as="h1" className="mb-s">
        {t('attributeTitle')}
      </Text>
      {!isSelectedPriority ? (
        <Text size="m" className="mb-s" weight="semibold">
          {t('notSelectedAttributePriority')}
        </Text>
      ) : (
        <>
          <Text size="s" as="span" className="mb-s">
            {t('attributeDescription')}
          </Text>

          <Text className="mt-m mb-b" weight="bold">
            {t('leftAttributes')}: {leftAttributes}
          </Text>

          {SETTABLE_ATTRIBUTES.map((attributeKey) => {
            return (
              <div className="vertical-container" key={attributeKey}>
                <Text className="mt-m" weight="bold">
                  {SETTABLE_ATTRIBUTES_TO_NAME[attributeKey]}:{' '}
                  {character.attributes[attributeKey].toString()}
                </Text>

                <Slider
                  min={0}
                  max={6}
                  value={character.attributes[attributeKey]}
                  step={1}
                  onChange={({ value }) =>
                    dispatch(
                      changeCharacterAttribute({
                        key: attributeKey,
                        level: value as AttributeLevel,
                      }),
                    )
                  }
                />
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default AttributeCreateComponent;
