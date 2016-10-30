import React from 'react'
import cn from 'classnames'

export default class Todo extends React.Component {
  componentDidUpdate ({ todo: { $isEditing: prevIsEditing } }) {
    const { todo: { $isEditing: isEditing } } = this.props

    if (!prevIsEditing && isEditing) {
      this.input && this.input.focus()
    }
  }

  render () {
    const {
      todoRef: ref,
      todo: { title, completed, $isEditing: isEditing, $isSaving: isSaving, $newTitle: newTitle } = {},
      toggleCompletedChanged,
      todoDoubleClicked,
      removeTodoClicked,
      newTitleSubmitted,
      newTitleAborted,
      newTitleChanged
    } = this.props

    return (
      <li className={cn({ completed, editing: isEditing })}>
        <div className='view'>
          {
            isSaving
              ? null
              : <input
                className='toggle'
                type='checkbox'
                disabled={isSaving}
                onChange={() => toggleCompletedChanged({ ref })}
                checked={completed} />
          }
          <label onDoubleClick={() => isSaving || todoDoubleClicked({ ref })}>
            {title} {isSaving ? <small>(saving)</small> : null}
          </label>
          { isSaving ? null : <button className='destroy' onClick={() => removeTodoClicked({ ref })} />}
        </div>
        <form onSubmit={(e) => e.preventDefault() && newTitleSubmitted({ ref })}>
          <input
            ref={(input) => { this.input = input }}
            className='edit'
            value={newTitle || title}
            onBlur={() => newTitleAborted({ ref })}
            onChange={(e) => newTitleChanged({ ref, title: e.target.value })}
          />
        </form>
      </li>
    )
  }
}
