/* eslint-env jest */
import {isAllChecked} from './isAllChecked'

it('should work if props doesn\'t set', () => {
  expect(isAllChecked({})).toEqual(false)
})

it('should work when there is no todos yet', () => {
  expect(isAllChecked({todos: {}, visibleTodosRefs: []})).toEqual(false)
})

it('should compute isAllChecked', () => {
  const todos = {
    1: {completed: true},
    2: {completed: false},
    3: {completed: true},
    4: {completed: false},
    5: {completed: false}
  }
  expect(isAllChecked({todos, visibleTodosRefs: []})).toEqual(false)
  expect(isAllChecked({todos, visibleTodosRefs: ['1', '2']})).toEqual(false)
  expect(isAllChecked({todos, visibleTodosRefs: ['1', '2', '3', '4', '5']})).toEqual(false)
  expect(isAllChecked({todos, visibleTodosRefs: ['1']})).toEqual(true)
  expect(isAllChecked({todos, visibleTodosRefs: ['1', '3']})).toEqual(true)
})

it('should throw if ref not exists', () => {
  expect(() => isAllChecked({todos: {}, visibleTodosRefs: ['1']})).toThrow()
})
