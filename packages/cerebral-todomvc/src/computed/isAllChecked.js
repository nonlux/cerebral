import {Computed} from 'cerebral'
import visibleTodosRefs from './visibleTodosRefs'

export default Computed({
  visibleTodosRefs: visibleTodosRefs,
  todos: 'app.todos.**'
}, isAllChecked)

export function isAllChecked ({visibleTodosRefs = [], todos = {}}) {
  return visibleTodosRefs.filter((ref) => {
    if (!todos[ref]) {
      throw Error(`failed to find todo with '${ref}' ref.`)
    }
    return !todos[ref].completed
  }).length === 0 && visibleTodosRefs.length !== 0
}
