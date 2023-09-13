import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Collapse } from '@consta/uikit/Collapse';
import { Text } from '@consta/uikit/Text';

import BaseModalComponent from '../base-modal.component';
import { selectorIsAttributeModalOpened } from '../store/modal.selector';
import { toggleModal } from '../store/modal.slice';

const ModalAttributeComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isBodyOpen, setIsBodyOpen] = useState<boolean>(false);
  const [isDexterityOpen, setIsDexterityOpen] = useState<boolean>(false);
  const [isStrengthOpen, setIsStrengthOpen] = useState<boolean>(false);
  const [isCharismaOpen, setIsCharismaOpen] = useState<boolean>(false);
  const [isIntellectOpen, setIsIntellectOpen] = useState<boolean>(false);
  const [isWillPowerOpen, setIsWillPowerOpen] = useState<boolean>(false);
  const [isEntityOpen, setIsEntityOpen] = useState<boolean>(false);
  const [isMagicOpen, setIsMagicOpen] = useState<boolean>(false);
  const [isReactionOpen, setIsReactionOpen] = useState<boolean>(false);

  const isOpened = useSelector(selectorIsAttributeModalOpened);

  const handleClose = (): void => {
    dispatch(toggleModal('attribute'));
  };

  return (
    <BaseModalComponent
      isOpened={isOpened}
      title={t('attribute.detailTitle')}
      handleClose={handleClose}
    >
      {/* Physical */}
      <Text size="l" className="vertical-container">
        {t('attribute.physical')}
      </Text>

      <div className="vertical-container">
        {/* Body */}
        <Collapse
          label={t('attribute.body')}
          size="s"
          isOpen={isBodyOpen}
          onClick={() => setIsBodyOpen(!isBodyOpen)}
        >
          <Text size="s">{t('attribute.bodyDescription')}</Text>
        </Collapse>

        {/* Dexterity */}
        <Collapse
          label={t('attribute.dexterity')}
          size="s"
          isOpen={isDexterityOpen}
          onClick={() => setIsDexterityOpen(!isDexterityOpen)}
        >
          <Text size="s">{t('attribute.dexterityDescription')}</Text>
        </Collapse>

        {/* Strength */}
        <Collapse
          label={t('attribute.strength')}
          size="s"
          isOpen={isStrengthOpen}
          onClick={() => setIsStrengthOpen(!isStrengthOpen)}
        >
          <Text size="s">{t('attribute.strengthDescription')}</Text>
        </Collapse>
      </div>

      {/* Mental */}
      <Text size="l" className="vertical-container">
        {t('attribute.mental')}
      </Text>

      <div className="vertical-container">
        {/* Charisma */}
        <Collapse
          label={t('attribute.charisma')}
          size="s"
          isOpen={isCharismaOpen}
          onClick={() => setIsCharismaOpen(!isCharismaOpen)}
        >
          <Text size="s">{t('attribute.charismaDescription')}</Text>
        </Collapse>

        {/* Intellect */}
        <Collapse
          label={t('attribute.intellect')}
          size="s"
          isOpen={isIntellectOpen}
          onClick={() => setIsIntellectOpen(!isIntellectOpen)}
        >
          <Text size="s">{t('attribute.intellectDescription')}</Text>
        </Collapse>

        {/* Will power */}
        <Collapse
          label={t('attribute.willPower')}
          size="s"
          isOpen={isWillPowerOpen}
          onClick={() => setIsWillPowerOpen(!isWillPowerOpen)}
        >
          <Text size="s">{t('attribute.willPowerDescription')}</Text>
        </Collapse>
      </div>

      {/* Special */}
      <Text size="l" className="vertical-container">
        {t('attribute.special')}
      </Text>

      <div className="vertical-container">
        {/* Entity */}
        <Collapse
          label={t('attribute.entity')}
          size="s"
          isOpen={isEntityOpen}
          onClick={() => setIsEntityOpen(!isEntityOpen)}
        >
          <Text size="s">{t('attribute.entityDescription')}</Text>
        </Collapse>

        {/* Magic */}
        <Collapse
          label={t('attribute.magic')}
          size="s"
          isOpen={isMagicOpen}
          onClick={() => setIsMagicOpen(!isMagicOpen)}
        >
          <Text size="s">{t('attribute.magicDescription')}</Text>
        </Collapse>

        {/* Reaction */}
        <Collapse
          label={t('attribute.reaction')}
          size="s"
          isOpen={isReactionOpen}
          onClick={() => setIsReactionOpen(!isReactionOpen)}
        >
          <Text size="s">{t('attribute.reactionDescription')}</Text>
        </Collapse>
      </div>
    </BaseModalComponent>
  );
};

export default ModalAttributeComponent;
