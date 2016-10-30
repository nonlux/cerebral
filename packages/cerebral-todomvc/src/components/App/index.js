import React from 'react'
import { connect } from 'cerebral/react'
import { Computed } from 'cerebral'
import App from './component'
import NewTodoForm from '../NewTodo'
import TodosList from '../List'
import TodosFooter from '../Footer'
import Recorder from '../Recorder'
import todosListVisible from '../../computed/todosListVisible'
import todosFooterVisible from '../../computed/todosFooterVisible'

export default connect({
  todosFooterVisible: todosFooterVisible,
  todosListVisible: todosListVisible,
  children: Computed({}, () => [
    <Recorder />,
    <NewTodoForm />,
    <TodosList />,
    <TodosFooter />
  ])
}, App)
