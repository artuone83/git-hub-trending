/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../../redux/store';

export type LanguagesResponse = { urlParam: string; name: string };

export type LanguagesState = {
  list: LanguagesResponse[];
  isFetching: boolean;
  languageChoice: string;
};

const initialState: LanguagesState = {
  list: [],
  isFetching: false,
  languageChoice: '',
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
    setLanguageChoice: (state, action: PayloadAction<string>) => {
      state.languageChoice = action.payload;
    },
  },
});

export const { setIsFetching, setLanguages, setLanguageChoice } = languagesSlice.actions;

export const selectLanguages = (state: RootState): LanguagesResponse[] => state.languages.list;

export const selectIsFetching = (state: RootState): boolean => state.languages.isFetching;

export const selectLanguageChoice = (state: RootState): string => state.languages.languageChoice;

export const getLanguagesAsync = (): AppThunk => (dispatch) => {
  const getLanguages = async (): Promise<LanguagesResponse[]> => {
    dispatch(setIsFetching(true));
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/languages`);

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();

    return data;
  };

  (async () => {
    try {
      const data = await getLanguages();
      dispatch(setLanguages(data as LanguagesResponse[]));
      dispatch(setIsFetching(false));
    } catch (error) {
      console.error(error.message);
      dispatch(setIsFetching(false));
    }
  })();
};

export default languagesSlice.reducer;
