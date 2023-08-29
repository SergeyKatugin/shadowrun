import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { presetGpnDefault, Theme } from '@consta/uikit/Theme';

import { RouteName } from './constants/route.constant';
import CharacterComponent from './features/character/character.component';
import ContentComponent from './features/content/content.component';
import AttributeCreateComponent from './features/create/attribute/attribute-create.component';
import CommonCreateComponent from './features/create/common/common-create.component';
import CreateComponent from './features/create/create.component';
import KnowledgeCreateComponent from './features/create/knowledge/knowledge-create.component';
import PriorityCreateComponent from './features/create/priority/priority-create.component';
import ResourceCreateComponent from './features/create/resource/resource-create.component';
import SkillCreateComponent from './features/create/skill/skill-create.component';
import FooterComponent from './features/footer/footer.component';
import HeaderComponent from './features/header/header.component';
import ModalsComponent from './features/modal/modals.component';

import './app.scss';

const router = createBrowserRouter([
  {
    path: RouteName.Home,
    element: (
      <>
        <header>
          <HeaderComponent />
        </header>

        <main className="container">
          <Outlet />
        </main>

        <footer>
          <FooterComponent />
        </footer>

        <ModalsComponent />
      </>
    ),
    children: [
      {
        path: RouteName.Home,
        element: <ContentComponent />,
      },
      {
        path: RouteName.Create,
        element: <CreateComponent />,
        children: [
          {
            path: RouteName.Common,
            element: <CommonCreateComponent />,
          },
          {
            path: RouteName.PriorityCreate,
            element: <PriorityCreateComponent />,
          },
          {
            path: RouteName.MageCreate,
            element: <PriorityCreateComponent />,
          },
          {
            path: RouteName.AttributeCreate,
            element: <AttributeCreateComponent />,
          },
          {
            path: RouteName.SkillCreate,
            element: <SkillCreateComponent />,
          },
          {
            path: RouteName.KnowledgeCreate,
            element: <KnowledgeCreateComponent />,
          },
          {
            path: RouteName.ResourceCreate,
            element: <ResourceCreateComponent />,
          },
        ],
      },
      {
        path: RouteName.Character,
        element: <CharacterComponent />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Theme preset={presetGpnDefault}>
      <div className="content">
        <RouterProvider router={router} />
      </div>
    </Theme>
  );
};

export default App;
