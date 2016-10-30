/* eslint-env jest */
import {visibleTodosRefs} from './visibleTodosRefs'

it('should work if props doesn\'t set', () => {
  expect(visibleTodosRefs({})).toEqual([])
})

it('should work when there is no todos yet', () => {
  expect(visibleTodosRefs({todos: {}})).toEqual([])
})

it('should compute visibleTodosRefs depend on active filter', () => {
  const todos = {
    1: {completed: true},
    2: {completed: false},
    3: {completed: true},
    4: {completed: false},
    5: {completed: false}
  }
  expect(visibleTodosRefs({todos, filter: 'all'})).toEqual(['1', '2', '3', '4', '5'])
  expect(visibleTodosRefs({todos, filter: 'completed'})).toEqual(['1', '3'])
  expect(visibleTodosRefs({todos, filter: 'active'})).toEqual(['2', '4', '5'])
})
