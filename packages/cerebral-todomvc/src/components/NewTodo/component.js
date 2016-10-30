import React from 'react'

export default function NewTodo ({ title, titleChanged, submitted }) {
  return (
    <form id='todo-form' onSubmit={(e) => {
      e.preventDefault()
      submitted()
    }}>
      <input
        className='new-todo'
        autoComplete='off'
        placeholder='What needs to be done?'
        value={title}
        onChange={(e) => titleChanged({ title: e.target.value })}
      />
    </form>
  )
}
