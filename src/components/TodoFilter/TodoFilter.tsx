import React, { useEffect, useState } from 'react';
import { TodoState } from '../../types/TodoState';

interface Props {
  setQuery: (query: string) => void;
  setFilterOption: (TodoState: TodoState) => void;
}

export const TodoFilter: React.FC<Props> = ({ setQuery, setFilterOption }) => {
  const handleFilterOptionChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFilterOption(event.target.value as TodoState);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setQuery(event.target.value.trimStart());
  };

  const handleClearSearch = () => {
    setQuery('');
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select data-cy="statusSelect" onChange={handleFilterOptionChange}>
            <option value={TodoState.all}>All</option>
            <option value={TodoState.active}>Active</option>
            <option value={TodoState.completed}>Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          onChange={handleSearchInputChange}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={handleClearSearch}
          />
        </span>
      </p>
    </form>
  );
};
