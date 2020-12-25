import { setVisibilityFilter } from '~/todos/slice--filter-control'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = { dispatch_setVisibilityFilter: setVisibilityFilter }

export { mapStateToProps, mapDispatchToProps }
