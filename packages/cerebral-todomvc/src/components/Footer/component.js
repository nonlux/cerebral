import React from 'react'
import cn from 'classnames'

export default function Footer ({ filter, counts: {remainingCount, completedCount} = {}, filterClicked, clearCompletedClicked }) {
  let countLabel = 'item left'
  if (remainingCount === 0 || remainingCount > 1) {
    countLabel = 'items left'
  }

  return (
    <footer className='footer'>
      <span className='todo-count'><strong>{remainingCount} {countLabel}</strong></span>
      <ul className='filters'>
        <li>
          <a
            onClick={() => filterClicked({ filter: 'all' })}
            className={cn({ selected: filter === 'all' })}
          >
            All
          </a>
        </li>
        <li>
          <a
            onClick={() => filterClicked({ filter: 'active' })}
            className={cn({ selected: filter === 'active' })}
          >
            Active
          </a>
        </li>
        <li>
          <a
            onClick={() => filterClicked({ filter: 'completed' })}
            className={cn({ selected: filter === 'completed' })}
          >
            Completed
          </a>
        </li>
      </ul>
      {
        completedCount
          ? <button className='clear-completed' onClick={() => clearCompletedClicked()}>
            {completedCount})
          </button>
          : null
      }
    </footer>
  )
}
