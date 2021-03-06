import { action_setVisibilityFilter } from '~/todos/todos-slice/slice--filter-control'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = { dispatch_setVisibilityFilter: action_setVisibilityFilter }

export { mapStateToProps, mapDispatchToProps }
