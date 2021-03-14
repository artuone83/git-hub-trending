/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from '../../styles/theme';
import { store } from '../../redux/store';
import { LanguagesDropdown } from '../../components/filtering/elements';

describe('LanguagesDropdown', () => {
  test('should fetch for languages on render', () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation((): Promise<any> => mockFetchPromise);

    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <LanguagesDropdown />
        </Provider>
      </ThemeProvider>
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:8000/languages');
  });
});
