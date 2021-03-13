import React from 'react';
import { FilteringOptions, RepositoriesList } from '../../../components';
import { StyledMain } from './main.styled';

type Props = {
  headerHeight: number;
  footerHeight: number;
};

const Main: React.FC<Props> = ({ headerHeight, footerHeight }) => (
  <StyledMain headerHeight={headerHeight} footerHeight={footerHeight}>
    <FilteringOptions />
    <RepositoriesList />
  </StyledMain>
);

export default Main;
