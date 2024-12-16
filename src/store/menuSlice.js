import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    openned: false
  },
  reducers: {
    toogleMenu: state => {
      state.openned = !state.openned;
    },
    setMenu: (state, action) => {
      state.openned = action.payload
    }
  }
})

export const { toogleMenu, setMenu } = menuSlice.actions

export default menuSlice.reducer