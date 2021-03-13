import React, { useEffect, useState, createRef } from 'react';
import { Container, Header, Main, Footer } from './components';

const App = (): JSX.Element => {
  const headerRef = createRef<HTMLElement>();
  const footerRef = createRef<HTMLElement>();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    setHeaderHeight(headerRef.current?.offsetHeight || 0);
    setFooterHeight(footerRef.current?.offsetHeight || 0);
  }, []);

  return (
    <Container>
      <Header ref={headerRef} />
      <Main headerHeight={headerHeight} footerHeight={footerHeight} />
      <Footer ref={footerRef} />
    </Container>
  );
};

export default App;
