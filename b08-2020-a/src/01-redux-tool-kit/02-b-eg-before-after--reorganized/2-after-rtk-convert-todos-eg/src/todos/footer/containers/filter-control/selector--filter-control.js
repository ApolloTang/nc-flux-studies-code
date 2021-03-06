import { setVisibilityFilter } from './slice--filter-control'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = { setVisibilityFilter }

export { mapStateToProps, mapDispatchToProps }
