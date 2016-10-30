import {Computed} from 'cerebral'

export default Computed({
  recorder: 'recorder.*'
}, recorderLabel)

export function recorderLabel ({ recorder = {} }) {
  if (recorder.isRecording) {
    return 'Stop'
  } else if (recorder.isPlaying) {
    return 'Pause'
  } else if (recorder.isPaused) {
    return 'Resume'
  } else if (recorder.hasRecording) {
    return 'Play'
  } else {
    return 'Record'
  }
}
