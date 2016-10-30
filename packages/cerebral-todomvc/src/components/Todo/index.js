import { connect } from 'cerebral/react'
import Todo from './component'

export default connect(props => ({
  todo: `app.todos.${props.todoRef}.*`
}), {
  todoDoubleClicked: 'app.todoDoubleClicked',
  newTitleChanged: 'app.todoNewTitleChanged',
  newTitleSubmitted: 'app.todoNewTitleSubmitted',
  toggleCompletedChanged: 'app.toggleTodoCompletedChanged',
  removeTodoClicked: 'app.removeTodoClicked',
  newTitleAborted: 'app.todoNewTitleAborted'
}, Todo)
