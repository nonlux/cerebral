import {Computed} from 'cerebral'

export default Computed({
  todos: 'app.todos'
}, todosFooterVisible)

export function todosFooterVisible ({todos = {}}) {
  return Object.keys(todos).length > 0
}
