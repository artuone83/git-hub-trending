import styled from 'styled-components';
import { Panel } from '../layout';

const StyledPanel = styled(Panel)`
  grid-area: repositories;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  font-weight: bold;

  span {
    margin-left: 5px;
  }
`;

export { StyledPanel, Title };
