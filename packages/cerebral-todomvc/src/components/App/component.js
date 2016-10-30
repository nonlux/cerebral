import React from 'react'

export default function App ({ todosListVisible, todosFooterVisible, children = [null, null, null, null] }) {
  const [Recorder, NewTodoForm, TodosList, TodosFooter] = children
  return (
    <div id='todoapp-wrapper'>
      {Recorder}
      <section className='todoapp'>
        <header className='header'>
          <h1>todos</h1>
          {NewTodoForm}
        </header>
        {todosListVisible ? TodosList : null}
        {todosFooterVisible ? TodosFooter : null}
      </section>
      <footer className='info'>
        <p>
          Double-click to edit a todo
        </p>
        <p>
          Credits:
          <a href='http://christianalfoni.com'>Christian Alfoni</a>,
        </p>
        <p>
          Part of <a href='http://todomvc.com'>TodoMVC</a>
        </p>
      </footer>
    </div>
  )
}
