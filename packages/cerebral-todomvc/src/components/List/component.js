import React from 'react'

export default function List ({ isAllChecked, toggleAllChanged, children }) {
  return (
    <section className='main'>
      <input
        className='toggle-all'
        type='checkbox'
        checked={isAllChecked}
        onChange={() => toggleAllChanged()} />
      <label htmlFor='toggle-all'>
        Mark all as complete
      </label>
      <ul className='todo-list'>
        {children}
      </ul>
    </section>
  )
}
