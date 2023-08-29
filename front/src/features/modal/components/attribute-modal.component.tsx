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
      title={t('attributeDetailTitle')}
      handleClose={handleClose}
    >
      {/* Physical */}
      <Text size="l" className="vertical-container">
        {t('attributePhysical')}
      </Text>

      <div className="vertical-container">
        {/* Body */}
        <Collapse
          label={t('attributeBody')}
          size="s"
          isOpen={isBodyOpen}
          onClick={() => setIsBodyOpen(!isBodyOpen)}
        >
          <Text size="s">{t('attributeBodyDescription')}</Text>
        </Collapse>

        {/* Dexterity */}
        <Collapse
          label={t('attributeDexterity')}
          size="s"
          isOpen={isDexterityOpen}
          onClick={() => setIsDexterityOpen(!isDexterityOpen)}
        >
          <Text size="s">{t('attributeDexterityDescription')}</Text>
        </Collapse>

        {/* Strength */}
        <Collapse
          label={t('attributeStrength')}
          size="s"
          isOpen={isStrengthOpen}
          onClick={() => setIsStrengthOpen(!isStrengthOpen)}
        >
          <Text size="s">{t('attributeStrengthDescription')}</Text>
        </Collapse>
      </div>

      {/* Mental */}
      <Text size="l" className="vertical-container">
        {t('attributeMental')}
      </Text>

      <div className="vertical-container">
        {/* Charisma */}
        <Collapse
          label={t('attributeCharisma')}
          size="s"
          isOpen={isCharismaOpen}
          onClick={() => setIsCharismaOpen(!isCharismaOpen)}
        >
          <Text size="s">{t('attributeCharismaDescription')}</Text>
        </Collapse>

        {/* Intellect */}
        <Collapse
          label={t('attributeIntellect')}
          size="s"
          isOpen={isIntellectOpen}
          onClick={() => setIsIntellectOpen(!isIntellectOpen)}
        >
          <Text size="s">{t('attributeIntellectDescription')}</Text>
        </Collapse>

        {/* Will power */}
        <Collapse
          label={t('attributeWillPower')}
          size="s"
          isOpen={isWillPowerOpen}
          onClick={() => setIsWillPowerOpen(!isWillPowerOpen)}
        >
          <Text size="s">{t('attributeWillPowerDescription')}</Text>
        </Collapse>
      </div>

      {/* Special */}
      <Text size="l" className="vertical-container">
        {t('attributeSpecial')}
      </Text>

      <div className="vertical-container">
        {/* Entity */}
        <Collapse
          label={t('attributeEntity')}
          size="s"
          isOpen={isEntityOpen}
          onClick={() => setIsEntityOpen(!isEntityOpen)}
        >
          <Text size="s">{t('attributeEntityDescription')}</Text>
        </Collapse>

        {/* Magic */}
        <Collapse
          label={t('attributeMagic')}
          size="s"
          isOpen={isMagicOpen}
          onClick={() => setIsMagicOpen(!isMagicOpen)}
        >
          <Text size="s">{t('attributeMagicDescription')}</Text>
        </Collapse>

        {/* Reaction */}
        <Collapse
          label={t('attributeReaction')}
          size="s"
          isOpen={isReactionOpen}
          onClick={() => setIsReactionOpen(!isReactionOpen)}
        >
          <Text size="s">{t('attributeMagicDescription')}</Text>
        </Collapse>
      </div>
    </BaseModalComponent>
  );
};

export default ModalAttributeComponent;
