import React from 'react';
import { StyledFooter } from './footer.styled';

const Footer: React.FC = () => (
  <StyledFooter>
    <div>
      Icons made by{' '}
      <a href='https://www.freepik.com' title='Freepik'>
        Freepik
      </a>{' '}
      from{' '}
      <a href='https://www.flaticon.com/' title='Flaticon'>
        www.flaticon.com
      </a>
    </div>
    <p>{new Date().getFullYear()}</p>
  </StyledFooter>
);

export default Footer;
