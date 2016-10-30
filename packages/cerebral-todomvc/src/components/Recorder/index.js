import { connect } from 'cerebral/react'
import Recorder from './component'
import recorderLabel from '../../computed/recorderLabel'

export default connect({
  label: recorderLabel
}, ({ label }) => {
  return {
    onClick: `recorder.${label.toLowerCase().replace('resume', 'play')}Clicked`
  }
}, Recorder)
