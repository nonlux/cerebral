import {Computed} from 'cerebral'

export default Computed({
  todos: 'app.todos.**'
}, counts)

export function counts ({todos = {}}) {
  return Object.keys(todos).reduce((counts, ref) => {
    let todo = todos[ref]

    if (todo.completed) {
      counts.completedCount++
    } else if (!todo.completed) {
      counts.remainingCount++
    }

    return counts
  }, {
    completedCount: 0,
    remainingCount: 0
  })
}
