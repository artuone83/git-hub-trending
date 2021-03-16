/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as ArrowIcon } from '../../../assets/arrow.svg';
import { setToLocalStorage } from '../../../../utils/setToLocalStorage';
import { getFromLocalStorage } from '../../../../utils/getFromLocalStorage';
import { LocalStorageKeys } from '../../../../models/localStorageKeys';
import { getRepositoriesAsync } from '../../../repositoriesList/repositoriesSlice';
import { setActiveTimeRange } from '../timeRange/timeRangeSlice';
import { SearchBar } from '../searchBar';
import {
  selectIsFetching,
  selectLanguages,
  LanguagesResponse,
  setLanguageChoice,
  getLanguagesAsync,
} from './languagesSlice';
import { Wrapper, LanguagesList, LanguageSelector } from './languagesDropdown.styled';

const LanguagesDropdown = (): JSX.Element => {
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: 'Select language',
    urlParam: '',
  });
  const modalRef = useRef<HTMLDivElement>(null);

  const isFetching = useSelector(selectIsFetching);
  const languages = useSelector(selectLanguages) as LanguagesResponse[];
  const dispatch = useDispatch();

  const [isListVisible, setIsListVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filteredLanguages, setFilteredLanguages] = useState(languages);

  useEffect(() => {
    dispatch(getLanguagesAsync());

    document.addEventListener('click', outsideClickListener);
    document.addEventListener('keyup', escapeListener);

    return () => {
      document.removeEventListener('click', outsideClickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, []);

  useEffect(() => {
    const storedLanguage = getFromLocalStorage(LocalStorageKeys.LANGUAGE);

    if (storedLanguage) {
      dispatch(setLanguageChoice(storedLanguage));
      const findIndex = languages?.findIndex((lang) => lang.urlParam === storedLanguage);

      if (findIndex !== -1) {
        setSelectedLanguage({
          name: languages[findIndex].name,
          urlParam: storedLanguage,
        });
      }
    }

    setFilteredLanguages(languages);
  }, [languages]);

  const outsideClickListener = useCallback(
    (e: MouseEvent) => {
      if (!modalRef?.current?.contains(e.target as Node)) {
        setIsListVisible(false);
      }
    },
    [modalRef.current]
  );

  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsListVisible(false);
    }
  }, []);

  const handleLangClick = (value: { name: string; urlParam: string }): void => {
    const { urlParam: languageChoice } = value;

    setSelectedLanguage(value);
    setIsListVisible(false);

    dispatch(setLanguageChoice(languageChoice));
    dispatch(getRepositoriesAsync(languageChoice, ''));
    setToLocalStorage(LocalStorageKeys.LANGUAGE, `${languageChoice}`);

    dispatch(setActiveTimeRange(''));
    window.localStorage.removeItem(LocalStorageKeys.SINCE);
  };

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const {
      target: { value },
    } = e;

    setSearchValue(value);

    let currentValue = searchValue;
    currentValue = value;

    const filtered = languages.filter((lang) => lang.name.toLowerCase().includes(currentValue.toLowerCase()));

    setFilteredLanguages(filtered);
  };

  return (
    <Wrapper ref={modalRef} isListVisible={isListVisible} isFetching={isFetching}>
      <LanguageSelector
        data-testid='language-selector'
        onClick={() => {
          setIsListVisible(!isListVisible);
        }}
        isFetching={isFetching}
      >
        {selectedLanguage.name}
        {isFetching ? <PuffLoader size={15} /> : <ArrowIcon />}
      </LanguageSelector>

      <LanguagesList isListVisible={isListVisible}>
        <li>
          <SearchBar handleSearchChange={handleSearchChange} searchValue={searchValue} />
        </li>
        {filteredLanguages.map((lang, index) => {
          const { name } = lang;

          return (
            <li
              key={`${name}-${index}`}
              data-testid='language'
              onClick={() => {
                handleLangClick(lang);
              }}
            >
              {name}
            </li>
          );
        })}
      </LanguagesList>
    </Wrapper>
  );
};

export default LanguagesDropdown;
