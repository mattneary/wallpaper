import {Component} from 'react'
import {render} from 'react-dom'
import Wallpaper from './components/Wallpaper'

import cs from './styles.css'

class App extends Component {
  render () {
    return <Wallpaper />
  }
}

render(<App/>, document.getElementById('app'))
