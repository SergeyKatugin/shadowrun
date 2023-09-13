import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Slider } from '@consta/uikit/Slider';
import { Text } from '@consta/uikit/Text';

import { RouteName } from '../../../constants/route.constant';
import useMount from '../../../hooks/use-mount.hook';
import { RatingLevel } from '../../../types/rating.type';
import { IconDice } from '../../../ui/icons/icon-dice.component';
import {
  CHANGABLE_ATTRIBUTES,
  CHANGABLE_ATTRIBUTES_TO_NAME,
} from '../../attribute/attribute.constant';
import { ChangeableAttribute } from '../../attribute/attribute.type';
import {
  selectorCharacter,
  selectorLeftAttributes,
} from '../../character/character.selector';
import {
  changeCharacterAttribute,
  randomizeCharacterAttributes,
} from '../../character/character.slice';
import { setFooter, setFooterDisabled } from '../../footer/footer.slice';

const AttributeCreateComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const character = useSelector(selectorCharacter);
  const leftAttributes = useSelector(selectorLeftAttributes);

  useMount(() => {
    dispatch(
      setFooter({
        text: t('menu.attributeNext'),
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
    if (leftAttributes < 0) {
      dispatch(setFooterDisabled(true));
    } else {
      dispatch(setFooterDisabled(false));
    }
  }, [dispatch, leftAttributes]);

  const randomizeAttributes = () => {
    dispatch(randomizeCharacterAttributes());
  };

  return (
    <>
      <Text size="xl" as="h1" className="mb-s">
        {t('attribute.title')}
      </Text>
      {!character.priority?.attributes ? (
        <Text size="m" className="mb-s" weight="semibold">
          {t('attribute.notSelected')}
        </Text>
      ) : (
        <>
          <Text size="s" as="span" className="mb-s">
            {t('attribute.description')}
          </Text>

          <Layout className="mt-m mb-b align-center">
            <Text weight="bold">
              {t('attribute.left')}: {leftAttributes}
            </Text>

            <Button
              onlyIcon
              iconLeft={IconDice}
              view="ghost"
              size="s"
              onClick={randomizeAttributes}
              className={cnMixSpace({ mL: 's' })}
            />
          </Layout>

          {Object.keys(CHANGABLE_ATTRIBUTES).map((attributeKey) => {
            const attribute = attributeKey as ChangeableAttribute;

            return (
              <div className="vertical-container" key={attributeKey}>
                <Text className="mt-m" weight="bold">
                  {CHANGABLE_ATTRIBUTES_TO_NAME[attribute]}:{' '}
                  {character.attributes[attribute].toString()}
                </Text>

                <Slider
                  min={1}
                  max={6}
                  value={character.attributes[attribute]}
                  step={1}
                  onChange={({ value }) =>
                    dispatch(
                      changeCharacterAttribute({
                        key: attribute,
                        rating: value as RatingLevel,
                      }),
                    )
                  }
                />

                <Text className="mt-m" size="s">
                  {
                    CHANGABLE_ATTRIBUTES[attribute][
                      character.attributes[attribute] - 1
                    ]
                  }
                </Text>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default AttributeCreateComponent;
