import React from 'react';
import styled from 'styled-components';
import { Container, FilteringOptions, RepositoriesList } from './components';

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const Main = styled.main``;

const Footer = styled.footer`
  border-top: 1px solid gray;
`;

const App = (): JSX.Element => (
  <Container>
    <Header>
      <p>Github Unofficial Trending API</p>
    </Header>
    <Main>
      <FilteringOptions />
      <RepositoriesList />
    </Main>
    <Footer>Footer</Footer>
  </Container>
);

export default App;
