import React from 'react';

import ModalAttributeComponent from './components/attribute-modal.component';
import SimpleViewModalComponent from './components/simpe-view-modal.component';

const modals = [
  <ModalAttributeComponent key="attribute" />,
  <SimpleViewModalComponent key="simply" />,
];

const ModalsComponent = () => <div>{modals}</div>;

export default ModalsComponent;
