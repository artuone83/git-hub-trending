import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import languageReducer from '../components/filtering/elements/languagesDropdown/languagesSlice';
import repositoriesReducer from '../components/repositoriesList/repositoriesSlice';
import timeRangeReducer from '../components/filtering/elements/timeRange/timeRangeSlice';

export const store = configureStore({
  reducer: {
    languages: languageReducer,
    repositories: repositoriesReducer,
    timeRange: timeRangeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
