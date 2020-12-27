import React from 'react'
import { Link } from './link'
import { VisibilityFilters } from '~/todos/todos-slice/slice--filter-control'

const Footer = () => (
  <div>
    <span>Show: </span>
    <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
    <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
    <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
  </div>
)

export { Footer }
