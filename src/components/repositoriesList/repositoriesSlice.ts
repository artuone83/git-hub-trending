/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../redux/store';

export type RepositoriesState = {
  list: RepositoriesResponse[];
  isFetching: boolean;
};

export type RepositoriesResponse = {
  author: string;
  name: string;
  description: string;
  language: string;
  languageColor?: string;
  stars: number;
};

const initialState: RepositoriesState = {
  list: [],
  isFetching: false,
};

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setRepositories: (state, action: PayloadAction<RepositoriesResponse[]>) => {
      state.list = action.payload;
    },
  },
});

export const { setIsFetching, setRepositories } = repositoriesSlice.actions;

export const selectRepositories = (state: RootState): RepositoriesResponse[] => state.repositories.list;

export const selectIsFetching = (state: RootState): boolean => state.repositories.isFetching;

export const getRepositoriesAsync = (language = '', timeRange = ''): AppThunk => (dispatch) => {
  const getRepositories = async (): Promise<RepositoriesResponse[]> => {
    dispatch(setIsFetching(true));

    const baseUrl = new URL(`${process.env.REACT_APP_BASE_URL}`);

    const params = new URLSearchParams(baseUrl.search);
    params.set('language', language);
    params.set('since', timeRange);

    const urlWithParams = `${process.env.REACT_APP_BASE_URL}/repositories?${params.toString()}`;

    const response = await fetch(urlWithParams);

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = response.json();

    return data;
  };

  (async () => {
    try {
      const data = await getRepositories();
      dispatch(setRepositories(data as RepositoriesResponse[]));
      dispatch(setIsFetching(false));
    } catch (error) {
      console.error(error.message);
      dispatch(setIsFetching(false));
    }
  })();
};

export default repositoriesSlice.reducer;
