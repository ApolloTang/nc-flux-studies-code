import todosReducer from './todos-slice'
import { addTodo, toggleTodo } from './todos-slice'

// prettier-ignore
describe('todos reducer', () => {
  it('should handle initial state', () => {
    const stateBefore = undefined
    const action = {}

    const stateAfter = []
    expect(todosReducer(stateBefore, action)).toEqual(stateAfter)
  })

  it('should handle ADD_TODO', () => {

    let action = {
      type: addTodo.type,
      payload: { text: 'Run the tests', id: 0}
    }
    let stateBefore = [
    ]
    let stateAfter = [
      { text: 'Run the tests', completed: false, id: 0 }
    ]
    expect(todosReducer(stateBefore, action)).toEqual(stateAfter)

    action = {
      type: addTodo.type,
      payload: { text: 'Use Redux', id: 1}
    }
    stateBefore = [
      { text: 'Run the tests', completed: false, id: 0 }
    ]
    stateAfter = [
      { text: 'Run the tests', completed: false, id: 0 },
      { text: 'Use Redux', completed: false, id: 1 }
    ]
    expect(todosReducer(stateBefore, action)).toEqual(stateAfter)

    action = {
      type: addTodo.type,
      payload: { text: 'Fix the tests', id: 2}
    }
    stateBefore = [
      { text: 'Run the tests', completed: false, id: 0 },
      { text: 'Use Redux', completed: false, id: 1 }
    ]
    stateAfter = [
      { text: 'Run the tests', completed: false, id: 0 },
      { text: 'Use Redux', completed: false, id: 1 },
      { text: 'Fix the tests', completed: false, id: 2 }
    ]
    expect(todosReducer(stateBefore, action)).toEqual(stateAfter)
  })

  it('should handle TOGGLE_TODO', () => {

    let action = {
      type: toggleTodo.type,
      payload: 1
    }
    let stateBefore = [
      { text: 'Run the tests', completed: false, id: 0 },
      { text: 'Use Redux', completed: false, id: 1 },
    ]
    let stateAfter = [
      { text: 'Run the tests', completed: false, id: 0 },
      { text: 'Use Redux', completed: true, id: 1 },
    ]
    expect(todosReducer(stateBefore, action)).toEqual(stateAfter)

  })
})
