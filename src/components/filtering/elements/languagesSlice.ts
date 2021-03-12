/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../store/store';

export type LanguagesResponse = { urlParam: string; name: string };

export interface LanguagesState {
  list: LanguagesResponse[];
  isFetching: boolean;
}

const initialState: LanguagesState = {
  list: [],
  isFetching: false,
};

export const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setLanguages: (state, action: PayloadAction<LanguagesResponse[]>) => {
      state.list = action.payload;
    },
  },
});

export const { setIsFetching, setLanguages } = languagesSlice.actions;

export const selectLanguages = (state: RootState): LanguagesResponse[] => state.languages.list;

export const selectIsFetching = (state: RootState): boolean => state.languages.isFetching;
// TODO move from useEffect here - how
export const getLanguagesAsync = (): AppThunk => (dispatch) => {
  try {
    const getLanguages = async (): Promise<LanguagesResponse[]> => {
      dispatch(setIsFetching(true));
      const response = await fetch('http://localhost:9000/languages');

      if (response.ok) {
        throw new Error('Http error: could not get languages');
      }

      const data = await response.json();

      return data;
    };

    getLanguages().then((data) => {
      dispatch(setLanguages(data));
      dispatch(setIsFetching(false));
    });
  } catch (error) {
    console.error(error.message);
    dispatch(setIsFetching(false));
  }
};

export default languagesSlice.reducer;
