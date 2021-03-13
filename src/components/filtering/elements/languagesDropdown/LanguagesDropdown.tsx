/* eslint-disable react/no-array-index-key */
/* eslint-disable no-debugger */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as ArrowIcon } from '../../../assets/arrow.svg';
import {
  selectIsFetching,
  selectLanguages,
  LanguagesResponse,
  setLanguageChoice,
  getLanguagesAsync,
} from './languagesSlice';
import { Wrapper, LanguagesList } from './languagesDropdown.styled';

const LanguagesDropdown = (): JSX.Element => {
  const [selectedLanguage, setSelectedLanguage] = useState({ name: 'Select language', urlParam: '' });
  const [isListVisible, setIsListVisible] = useState(false);
  const dispatch = useDispatch();
  const languages = useSelector(selectLanguages) as LanguagesResponse[];
  const isFetching = useSelector(selectIsFetching);

  useEffect(() => {
    dispatch(getLanguagesAsync());
  }, []);

  const handleLangClick = (value: { name: string; urlParam: string }): void => {
    setSelectedLanguage(value);
    setIsListVisible(false);
    dispatch(setLanguageChoice(value.urlParam));
  };

  return (
    <Wrapper isListVisible={isListVisible} isFetching={isFetching} onClick={() => setIsListVisible(!isListVisible)}>
      <p>{selectedLanguage.name}</p>
      {isFetching ? <PuffLoader size={15} /> : <ArrowIcon />}
      <LanguagesList isListVisible={isListVisible}>
        {languages.map((lang, index) => (
          <li key={`${lang.name}-${index}`} onClick={() => handleLangClick(lang)}>
            {lang.name}
          </li>
        ))}
      </LanguagesList>
    </Wrapper>
  );
};

export default LanguagesDropdown;
