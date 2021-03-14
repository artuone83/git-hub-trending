import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Wrapper, StyledTable, TableRow, Td, Th } from './table.styled';

export type GenericType = {
  [key: string]: string | number;
};

export type ComponentProps = {
  value?: string | number | GenericType;
  item?: {
    [key: string]: string | number | GenericType | undefined;
  };
};

export type RowDisabledProps = {
  item?: {
    [key: string]: string | number | GenericType | undefined;
  };
};

type Field = {
  header: string;
  field: string;
  isSortable?: boolean;
  component?: ({ value, item }: ComponentProps) => ReactNode;
};

export type TableDataType = {
  [key: string]: string | number | GenericType | undefined;
};

type SortType = {
  field: string;
  direction: Direction;
};

export enum Direction {
  Asc = 'asc',
  Desc = 'desc',
  None = 'none',
}

type TableProps = {
  viewModel: {
    fields: Field[];
  };
  data: TableDataType[];
  onFilterChange: (sortField: string, direction: Direction) => void;
};

const Table: FC<TableProps> = ({ viewModel, data, onFilterChange }) => {
  const [sortingData, setSorting] = useState<SortType>({ field: '', direction: Direction.None });

  useEffect(() => {
    onFilterChange(sortingData.field, sortingData.direction);
  }, []);

  const handleSortingChange = (sortField: string): void => {
    const { field, direction } = sortingData;
    let newSortingData: SortType = { field: sortField, direction };

    if (field === sortField) {
      if (direction === Direction.None || direction === Direction.Desc) {
        newSortingData = { field: sortField, direction: Direction.Asc };
      } else if (direction === Direction.Asc) {
        newSortingData = { field: sortField, direction: Direction.Desc };
      }
    } else {
      newSortingData = { field: sortField, direction: Direction.Asc };
    }

    setSorting(newSortingData);
    onFilterChange(newSortingData.field, newSortingData.direction);
  };

  return (
    <Wrapper>
      <StyledTable>
        <thead>
          <tr>
            {viewModel.fields.map(({ header, field, isSortable }) => (
              <Th
                sortDirection={sortingData.field === field ? sortingData.direction : Direction.None}
                isSortable={isSortable}
                onClick={() => isSortable && handleSortingChange(field)}
                key={field}
              >
                {header}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dataItem) => (
            <TableRow key={`row-${dataItem.name}`}>
              {viewModel.fields.map(({ field, component }, rowIndex) => (
                // eslint-disable-next-line react/no-array-index-key
                <Td key={`${dataItem.name}-${rowIndex}`}>
                  {component
                    ? component({
                        value: dataItem[field],
                        item: dataItem,
                      })
                    : dataItem[field]}
                </Td>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};

export default Table;
