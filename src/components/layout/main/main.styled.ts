import styled from 'styled-components';

const StyledMain = styled.main<{ headerHeight: number }>`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto minmax(350px, auto);
  grid-gap: 18px;

  grid-template-areas:
    'filtering filtering filtering filtering filtering filtering filtering filtering'
    'repositories repositories repositories repositories repositories repositories repositories repositories ';

  margin-top: ${({ headerHeight }) => headerHeight + 50}px;
`;

export { StyledMain };
