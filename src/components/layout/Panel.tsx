import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px 24px;
  background: white;
`;

export interface PanelProps {
  className?: string;
}

const Panel: React.FC<PanelProps> = ({ children, className }) => <Wrapper className={className}>{children}</Wrapper>;

export default Panel;
