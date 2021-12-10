export const component = `import { h } from 'nano-jsx/lib/core'
import { Component } from 'nano-jsx/lib/component'
import { withStyles } from 'nano-jsx/lib/withStyles'
import styles from './NAME.style'

class Name extends Component {
  render() {
    return <div id="name">Hi from Name component</div>
  }
}

const component = withStyles(styles)(Name)
export { component as Name }
`

export const styles = `export default /*CSS*/ \`
#name {
    color:red;
}
\`
`
