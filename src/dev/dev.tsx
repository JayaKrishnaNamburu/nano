import { h, render } from '../core'
import { Component } from '../component'
import { NAME } from '../cli/component'

class App extends Component {
  render() {
    return (
      <div>
        Nano JSX App
        <NAME />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
