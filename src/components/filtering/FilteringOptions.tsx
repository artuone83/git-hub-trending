import React from 'react';
import styled from 'styled-components';
import { Panel } from '../layout';
import { LanguageDropdown, TimeRange } from './elements';

const StyledPanel = styled(Panel)`
  grid-area: filtering;
  display: flex;
  justify-content: space-between;
`;

const FilteringOptions: React.FC = () => (
  <StyledPanel>
    <LanguageDropdown />
    <TimeRange />
  </StyledPanel>
);

export default FilteringOptions;
