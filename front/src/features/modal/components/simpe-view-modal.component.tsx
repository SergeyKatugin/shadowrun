import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '@consta/uikit/Text';

import BaseModalComponent from '../base-modal.component';
import { selectorSimplyModal } from '../store/modal.selector';
import { resetSimplyView } from '../store/simply-modal.slice';

const SimpleViewModalComponent = () => {
  const dispatch = useDispatch();

  const simplyModal = useSelector(selectorSimplyModal);

  const handleClose = (): void => {
    dispatch(resetSimplyView());
  };

  if (Object.keys(simplyModal).length === 0) {
    return null;
  }

  return (
    <BaseModalComponent
      isOpened
      title={simplyModal.title}
      handleClose={handleClose}
    >
      {/* Physical */}
      <Text size="s" className="vertical-container">
        {simplyModal.description}
      </Text>
    </BaseModalComponent>
  );
};

export default SimpleViewModalComponent;
