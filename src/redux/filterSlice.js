const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterItems(state, action) {
      return action.payload;
    },
  },
});

export const filterReduser = filterSlice.reducer;
export const { filterItems } = filterSlice.actions;
