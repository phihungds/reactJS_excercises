import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={keypressed:''}
  }

  hanndler =(e) => {
    this.setState({keypressed: e.key})
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <p>Key pressed is: {this.state.keypressed}</p>
        <input type='text' onKeyPress={ (e) => this.hanndler(e)} />
      </div>
    )
  }
}

export default App;
