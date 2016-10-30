import {Computed} from 'cerebral'
import visibleTodosRefs from './visibleTodosRefs'

export default Computed({
  visibleTodosRefs: visibleTodosRefs
}, todosListVisible)

export function todosListVisible ({visibleTodosRefs = []}) {
  return visibleTodosRefs.length > 0
}
