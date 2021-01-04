import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { action_setVisibilityFilter } from '~/todos/slices--todos/slice--filter-control'

const Link = ({ children, filter }) => {
  const dispatch = useDispatch()
  const active = useSelector(state => filter === state.todos.visibilityFilter )
  return (
    <button
      onClick={() => dispatch(action_setVisibilityFilter(filter))}
      disabled={active}
      style={{
        marginLeft: '4px'
      }}
    >
      {children}
    </button>
  )

}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired
}

export { Link }
