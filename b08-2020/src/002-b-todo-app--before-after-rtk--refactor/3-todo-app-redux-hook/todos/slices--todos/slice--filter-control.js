import { createSlice } from '@reduxjs/toolkit'
import { visibilityFiltersType } from '~/todos/models'



const slice = createSlice({
  name: 'visibilityFilters',
  initialState: visibilityFiltersType.SHOW_ALL,
  reducers: {
    setVisibilityFilter(state, action) {
      return action.payload
    }
  }
})

const {
  actions: { setVisibilityFilter },
  reducer
} = slice

export {
  reducer as reducer_visibilityFilter,
  setVisibilityFilter as action_setVisibilityFilter
}
