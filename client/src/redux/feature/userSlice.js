import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  username: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: defaultState },
  reducers: {
    loginAction: (state, action) => {
      state.value = { username: action.payload };
    }
  }
})

export const userReducer = userSlice.reducer;
export const { loginAction } = userSlice.actions;