import React from 'react'
import List from './component'
import Todo from '../Todo'
import { connect } from 'cerebral/react'
import { Computed } from 'cerebral'

import isAllChecked from '../../computed/isAllChecked'
import visibleTodosRefs from '../../computed/visibleTodosRefs'

export default connect({
  isAllChecked: isAllChecked,
  children: Computed({
    todoRefs: visibleTodosRefs
  }, ({todoRefs}) => todoRefs.map(ref => <Todo key={ref} todoRef={ref} />))
}, {
  toggleAllChanged: 'app.toggleAllChanged'
}, List)
