/* eslint-env jest */
import {counts} from './counts'

it('should work if props doesn\'t set', () => {
  expect(counts({})).toEqual({
    completedCount: 0,
    remainingCount: 0
  })
})

it('should work when there is no todos yet', () => {
  expect(counts({todos: {}})).toEqual({
    completedCount: 0,
    remainingCount: 0
  })
})

it('should count completed and remaining todos', () => {
  const todos = {
    1: {completed: true},
    2: {completed: false},
    3: {completed: true},
    4: {completed: false},
    5: {completed: false}
  }
  expect(counts({todos})).toEqual({
    completedCount: 2,
    remainingCount: 3
  })
})
