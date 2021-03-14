import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import App from '../../App';
import theme from '../../styles/theme';
import { store } from '../../redux/store';

test('renders learn react link', () => {
  render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/artuOne83/i);
  expect(linkElement).toBeInTheDocument();
});
