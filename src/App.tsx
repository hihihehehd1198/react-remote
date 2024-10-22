import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  render() {
    return (

        <p>
          react!!!!!!jkaszhdfjkahjkdhfjkashdahjsdgfajhsgdfajksdhfajkshdf
        </p>
    )
  }
}

class AppElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('react-element', AppElement);