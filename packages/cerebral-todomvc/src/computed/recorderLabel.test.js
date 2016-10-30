/* eslint-env jest */
import {recorderLabel} from './recorderLabel'

it('should work if props doesn\'t set', () => {
  expect(recorderLabel({})).toEqual('Record')
})

it('should compute label', () => {
  expect(recorderLabel({ recorder: { isRecording: false, isPlaying: false, isPaused: false, hasRecording: false } }))
    .toEqual('Record')
  expect(recorderLabel({ recorder: { isRecording: true, isPlaying: false, isPaused: false, hasRecording: false } }))
    .toEqual('Stop')
  expect(recorderLabel({ recorder: { isRecording: false, isPlaying: true, isPaused: false, hasRecording: false } }))
    .toEqual('Pause')
  expect(recorderLabel({ recorder: { isRecording: false, isPlaying: false, isPaused: true, hasRecording: false } }))
    .toEqual('Resume')
  expect(recorderLabel({ recorder: { isRecording: false, isPlaying: false, isPaused: false, hasRecording: true } }))
    .toEqual('Play')
  expect(recorderLabel({ recorder: { isRecording: true, isPlaying: false, isPaused: false, hasRecording: true } }))
    .toEqual('Stop')
  expect(recorderLabel({ recorder: { isRecording: false, isPlaying: true, isPaused: false, hasRecording: true } }))
    .toEqual('Pause')
  expect(recorderLabel({ recorder: { isRecording: false, isPlaying: false, isPaused: true, hasRecording: true } }))
    .toEqual('Resume')
})
