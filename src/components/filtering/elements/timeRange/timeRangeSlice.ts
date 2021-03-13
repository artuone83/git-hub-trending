/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../redux/store';

export type TimeRangeState = {
  activeTimeRange: string;
};

const initialState: TimeRangeState = {
  activeTimeRange: '',
};

export const timeRangeSlice = createSlice({
  name: 'timeRange',
  initialState,
  reducers: {
    setActiveTimeRange: (state, action: PayloadAction<string>) => {
      state.activeTimeRange = action.payload;
    },
  },
});

export const { setActiveTimeRange } = timeRangeSlice.actions;

export const selectActiveTimeRange = (state: RootState): string => state.timeRange.activeTimeRange;

export default timeRangeSlice.reducer;
