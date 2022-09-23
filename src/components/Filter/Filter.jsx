import React from 'react';
import PropTypes from 'prop-types';

import { FilterWrapper, FilterLable, FilterInput } from './Filter.styled';

export const Filter = ({ filterValue, onChange }) => (
  <FilterWrapper>
    <FilterLable>Find contacts by name or by phone number</FilterLable>
    <FilterInput
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={onChange}
      value={filterValue}
    />
  </FilterWrapper>
);

Filter.propTypes = {
  filterValue: PropTypes.string,
  onChange: PropTypes.func,
};
