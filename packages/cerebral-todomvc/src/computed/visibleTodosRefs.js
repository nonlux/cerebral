import {Computed} from 'cerebral'

export default Computed({
  todos: 'app.todos.**',
  filter: 'app.filter'
}, visibleTodosRefs)

export function visibleTodosRefs ({todos = {}, filter}) {
  return Object.keys(todos).filter((ref) => {
    const todo = todos[ref]

    return (
      filter === 'all' ||
      (filter === 'completed' && todo.completed) ||
      (filter === 'active' && !todo.completed)
    )
  })
}
