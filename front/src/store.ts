import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import characterReducer from './features/character/character.slice';
import priorityReduce from './features/create/priority/store/priority.slice';
import footerReducer from './features/footer/footer.slice';
import modalReducer from './features/modal/store/modal.slice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    footer: footerReducer,
    character: characterReducer,
    priority: priorityReduce,
    modal: modalReducer,
  },
  middleware: customizedMiddleware,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
