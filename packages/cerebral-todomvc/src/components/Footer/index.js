import {connect} from 'cerebral/react'
import Footer from './component'
import counts from '../../computed/counts'

export default connect({
  filter: 'app.filter',
  counts: counts
}, {
  filterClicked: 'app.filterClicked',
  clearCompletedClicked: 'app.clearCompletedClicked'
}, Footer)
