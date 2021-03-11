import React from 'react';
import styled from 'styled-components';
import { Container, FilteringOptions, RepositoriesList } from './components';

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto minmax(350px, auto); /*repeat(2, minmax(350px, auto));*/
  grid-gap: 18px;

  grid-template-areas:
    'filtering filtering filtering filtering filtering filtering filtering filtering'
    'repositories repositories repositories repositories repositories repositories repositories repositories ';
`;

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
