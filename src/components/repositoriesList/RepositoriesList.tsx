/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import PuffLoader from 'react-spinners/PuffLoader';
import { useSelector, useDispatch } from 'react-redux';
import { getFromLocalStorage } from '../../utils/getFromLocalStorage';
import { LocalStorageKeys } from '../../models/localStorageKeys';
import { ReactComponent as OpenBookIcon } from '../assets/open-book.svg';
import { Direction, ComponentProps } from './elements/table/Table';
import { getRepositoriesAsync, selectIsFetching, selectRepositories, setRepositories } from './repositoriesSlice';
import { StyledPanel, Title } from './repositoriesList.styled';
import { NoData, Table } from './elements';

const viewModel = {
  fields: [
    {
      header: 'Author',
      field: 'author',
    },
    {
      header: 'Name',
      field: 'name',
    },
    {
      header: 'Description',
      field: 'description',
    },
    {
      header: 'Link',
      field: 'url',
      component: ({ value }: ComponentProps) => (
        <a href={value as string} target='_blank' rel='noreferrer'>
          {value}
        </a>
      ),
    },
    {
      header: 'Language',
      field: 'language',
    },
    {
      header: 'Stars',
      field: 'stars',
      isSortable: true,
    },
  ],
};

const RepositoriesList: React.FC = () => {
  const [noDataMessage, setNoDataMessage] = useState('');
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositories);
  const isFetching = useSelector(selectIsFetching);

  useEffect(() => {
    const storedLanguage = getFromLocalStorage(LocalStorageKeys.LANGUAGE);
    const storedSince = getFromLocalStorage(LocalStorageKeys.SINCE);

    if (storedLanguage && storedSince) {
      dispatch(getRepositoriesAsync(storedLanguage, storedSince));
    } else if (storedLanguage) {
      dispatch(getRepositoriesAsync(storedLanguage, ''));
    } else if (storedSince) {
      dispatch(getRepositoriesAsync('', storedSince));
    }
  }, []);

  useEffect(() => {
    if (repositories.length === 0) {
      setNoDataMessage('No repositories for selected filtering options...');
    }
  }, [repositories]);

  const handleFilterChange = (sortField: string, direction: Direction): void => {
    const sortedData = sortBy(repositories, [sortField]);
    if (direction === Direction.Desc) {
      sortedData.reverse();
    }
    dispatch(setRepositories(sortedData));
  };

  return (
    <StyledPanel>
      <Title>
        <OpenBookIcon />
        Repositories <span>({repositories.length}x)</span> {isFetching && <PuffLoader size={15} />}
      </Title>
      {repositories.length > 0 ? (
        <Table viewModel={viewModel} data={repositories} onFilterChange={handleFilterChange} />
      ) : (
        <NoData message={noDataMessage} />
      )}
    </StyledPanel>
  );
};

export default RepositoriesList;
