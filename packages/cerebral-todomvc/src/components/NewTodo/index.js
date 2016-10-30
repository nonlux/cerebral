import { connect } from 'cerebral/react'
import NewTodo from './component'

export default connect({
  title: 'app.newTodoTitle'
}, {
  titleChanged: 'app.newTodoTitleChanged',
  submitted: 'app.newTodoSubmitted'
}, NewTodo)
