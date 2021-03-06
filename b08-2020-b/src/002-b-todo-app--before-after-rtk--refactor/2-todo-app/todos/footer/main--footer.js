import React from 'react'
import { FilterControl } from './filter-control/main--filter-control'
import { VisibilityFilters } from '~/todos/todos-slice/slice--filter-control'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterControl filter={VisibilityFilters.SHOW_ALL}>All</FilterControl>
    <FilterControl filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterControl>
    <FilterControl filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterControl>
  </div>
)

export { Footer }
