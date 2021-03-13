import React from 'react';
import { StyledFooter } from './footer.styled';

const Footer = React.forwardRef<HTMLElement>((_, ref) => (
  <StyledFooter ref={ref}>
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
    <p>Artur Woźniak &#169; {new Date().getFullYear()}</p>
  </StyledFooter>
));

Footer.displayName = 'Footer';

export default Footer;
