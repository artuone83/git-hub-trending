/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-proto */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from '../../styles/theme';
import { store } from '../../redux/store';
import { TimeRange } from '../../components/filtering/elements';

describe('TimeRange', () => {
  test('should set daily time range to local storage', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <TimeRange />
        </Provider>
      </ThemeProvider>
    );
    const tabs = getAllByTestId('since');
    const [daily] = tabs;

    fireEvent.click(daily);

    const storedTimeRange = window.localStorage.getItem('since');

    expect(tabs).toHaveLength(3);
    expect(storedTimeRange).not.toBe(null);
  });
  test('should fetch for repositories with daily param', () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation((): Promise<any> => mockFetchPromise);

    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <TimeRange />
        </Provider>
      </ThemeProvider>
    );
    const tabs = getAllByTestId('since');
    const [daily] = tabs;

    fireEvent.click(daily);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:8000/repositories?language=&since=daily');
  });
});
