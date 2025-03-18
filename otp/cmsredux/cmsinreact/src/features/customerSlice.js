import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
  name: 'customers',
  initialState: [],
  reducers: {
    addCustomer: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload.name,
        mobile: action.payload.mobile,
      });
    },
    removeCustomer: (state, action) => {
      return state.filter(customer => customer.id !== action.payload);
    },
  },
});

export const { addCustomer, removeCustomer } = customerSlice.actions;
export default customerSlice.reducer;
