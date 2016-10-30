import HOC from './hoc'

export default function connect (paths, passedSignals, passedComponent) {
  let component = passedComponent
  let signals = passedSignals

  if (arguments.length === 2) {
    component = signals
    signals = null
  }

  if (!component) {
    return function (decoratedComponent) {
      return HOC(paths, signals, decoratedComponent)
    }
  }

  return HOC(paths, signals, component)
}
