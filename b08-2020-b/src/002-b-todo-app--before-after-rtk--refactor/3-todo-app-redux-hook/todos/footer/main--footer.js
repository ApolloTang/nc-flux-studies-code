import React from 'react'
import { Link } from './link'
import { visibilityFiltersType } from '~/todos/models'

const Footer = () => (
  <div>
    <span>Show: </span>
    <Link filter={visibilityFiltersType.SHOW_ALL}>All</Link>
    <Link filter={visibilityFiltersType.SHOW_ACTIVE}>Active</Link>
    <Link filter={visibilityFiltersType.SHOW_COMPLETED}>Completed</Link>
  </div>
)

export { Footer }
