import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, dispatch_setVisibilityFilter, filter }) => (
  <button
    onClick={() => dispatch_setVisibilityFilter(filter)}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  dispatch_setVisibilityFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export { Link }
