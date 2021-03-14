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
  try {
    const getRepositories = async (): Promise<RepositoriesResponse[]> => {
      dispatch(setIsFetching(true));

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/repositories?language=${language}&since=${timeRange}`
      );

      if (!response.ok) {
        throw new Error('Could not get repositories');
      }

      const data = response.json();
      dispatch(setIsFetching(false));
      return data;
    };
    getRepositories().then((data) => dispatch(setRepositories(data)));
  } catch (error) {
    console.error(error.message);
    dispatch(setIsFetching(false));
  }
};

export default repositoriesSlice.reducer;
