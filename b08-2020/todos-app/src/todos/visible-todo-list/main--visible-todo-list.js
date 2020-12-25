import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from './selector--visible-todo-list'
import { TodoList } from '~/todos/todo-list/main--todo-list'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
