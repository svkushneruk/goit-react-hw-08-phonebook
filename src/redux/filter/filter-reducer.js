import { createReducer } from '@reduxjs/toolkit';

import { changeFilterValue } from './filter-actions';

const filterReducer = createReducer('', {
  [changeFilterValue]: (_, { payload }) => payload,
});

export default filterReducer;
