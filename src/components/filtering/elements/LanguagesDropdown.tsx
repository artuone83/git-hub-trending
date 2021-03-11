/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';

const Wrapper = styled.div<{ isListVisible: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px;
  border: 1px solid rgba(33, 33, 33, 0.42);
  min-width: 175px;
  cursor: pointer;

  p {
    margin-right: 10px;
  }

  svg {
    transition: 0.5s;
    transform: ${({ isListVisible }) => (isListVisible ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

const LanguagesList = styled.ul<{ isListVisible: boolean }>`
  position: absolute;
  display: ${({ isListVisible }) => (isListVisible ? 'block' : 'none')};
  right: 0;
  top: calc(100% + 10px);
  left: 0;
  background: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);

  li {
    padding: 7px 10px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background: #f5f5f5;
    }
  }
`;

const lang = [
  {
    name: 'JS',
  },
  {
    name: 'TS',
  },
  {
    name: 'JAVA',
  },
  {
    name: 'PHP',
  },
  {
    name: 'HTML',
  },
];

const LanguagesDropdown = (): JSX.Element => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isListVisible, setIsListVisible] = useState(false);

  let currentLanguage = 'Select language';
  if (selectedLanguage) {
    currentLanguage = selectedLanguage;
  }

  const handleLangClick = (name: string): void => {
    setSelectedLanguage(name);
    setIsListVisible(false);
  };

  return (
    <Wrapper isListVisible={isListVisible} onClick={() => setIsListVisible(!isListVisible)}>
      <p>{currentLanguage}</p>
      <ArrowIcon />
      <LanguagesList isListVisible={isListVisible}>
        {lang.map(({ name }) => (
          <li key={name} onClick={() => handleLangClick(name)}>
            {name}
          </li>
        ))}
      </LanguagesList>
    </Wrapper>
  );
};

export default LanguagesDropdown;
