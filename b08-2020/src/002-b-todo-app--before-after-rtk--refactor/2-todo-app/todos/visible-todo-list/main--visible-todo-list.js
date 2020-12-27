import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from './selector--visible-todo-list'
import { TodoList } from '~/todos/todo-list/main--todo-list'

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export {
  VisibleTodoList
}
