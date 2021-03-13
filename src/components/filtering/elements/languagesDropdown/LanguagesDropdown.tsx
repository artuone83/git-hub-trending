/* eslint-disable react/no-array-index-key */
/* eslint-disable no-debugger */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as ArrowIcon } from '../../../assets/arrow.svg';
import { setToLocalStorage } from '../../../../utils/setToLocalStorage';
import { getFromLocalStorage } from '../../../../utils/getFromLocalStorage';
import { LocalStorageKeys } from '../../../../models/localStorageKeys';
import { getRepositoriesAsync } from '../../../repositoriesList/repositoriesSlice';
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

  useEffect(() => {
    const storedLanguage = getFromLocalStorage(LocalStorageKeys.LANGUAGE);

    if (storedLanguage) {
      dispatch(setLanguageChoice(storedLanguage));
      const findIndex = languages?.findIndex((lang) => lang.urlParam === storedLanguage);

      if (findIndex !== -1) {
        setSelectedLanguage({ name: languages[findIndex].name, urlParam: storedLanguage });
      }
    }
  }, [languages]);

  const handleLangClick = (value: { name: string; urlParam: string }): void => {
    const { urlParam: languageChoice } = value;

    setSelectedLanguage(value);
    setIsListVisible(false);
    dispatch(setLanguageChoice(languageChoice));
    dispatch(getRepositoriesAsync(languageChoice, ''));

    setToLocalStorage(LocalStorageKeys.LANGUAGE, `${languageChoice}`);
  };

  return (
    <Wrapper isListVisible={isListVisible} isFetching={isFetching} onClick={() => setIsListVisible(!isListVisible)}>
      <p>{selectedLanguage.name}</p>
      {isFetching ? <PuffLoader size={15} /> : <ArrowIcon />}
      <LanguagesList isListVisible={isListVisible}>
        {languages.map((lang, index) => {
          const { name } = lang;

          return (
            <li key={`${name}-${index}`} onClick={() => handleLangClick(lang)}>
              {name}
            </li>
          );
        })}
      </LanguagesList>
    </Wrapper>
  );
};

export default LanguagesDropdown;
