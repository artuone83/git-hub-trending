import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import languageReducer from '../components/filtering/elements/languagesSlice';
import repositoriesReducer from '../components/repositoriesList/repositoriesSlice';

export const store = configureStore({
  reducer: {
    languages: languageReducer,
    repositories: repositoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
