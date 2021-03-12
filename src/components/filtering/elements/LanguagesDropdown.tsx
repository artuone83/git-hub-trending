/* eslint-disable react/no-array-index-key */
/* eslint-disable no-debugger */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import { selectIsFetching, selectLanguages, LanguagesResponse, setIsFetching, setLanguages } from './languagesSlice';
import { Wrapper, LanguagesList } from './languageDropdown.styled';

const LanguagesDropdown = (): JSX.Element => {
  const [selectedLanguage, setSelectedLanguage] = useState({ name: 'Select language', urlParam: '' });
  const [isListVisible, setIsListVisible] = useState(false);
  const dispatch = useDispatch();
  const languages = useSelector(selectLanguages) as LanguagesResponse[];
  const isFetching = useSelector(selectIsFetching);

  useEffect(() => {
    try {
      const getLanguages = async (): Promise<LanguagesResponse[]> => {
        dispatch(setIsFetching(true));
        const response = await fetch('http://localhost:9000/languages');
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Http error: could not get languages');
        }

        return data;
      };

      getLanguages().then((data) => {
        dispatch(setLanguages(data));
        dispatch(setIsFetching(false));
      });
    } catch (error) {
      console.error(error);
      dispatch(setIsFetching(false));
    }
  }, []);

  const handleLangClick = (value: { name: string; urlParam: string }): void => {
    setSelectedLanguage(value);
    setIsListVisible(false);
  };

  return (
    <Wrapper isListVisible={isListVisible} isFetching={isFetching} onClick={() => setIsListVisible(!isListVisible)}>
      <p>{selectedLanguage.name}</p>
      {isFetching ? <PuffLoader size={30} /> : <ArrowIcon />}
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
