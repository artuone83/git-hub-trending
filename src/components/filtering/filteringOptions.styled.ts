import styled from 'styled-components';
import media from '../../styles/media';
import { Panel } from '../layout';

const StyledPanel = styled(Panel)`
  grid-area: filtering;
  display: flex;
  justify-content: space-between;

  ${media.phone} {
    flex-direction: column;
  }
`;

export { StyledPanel };
