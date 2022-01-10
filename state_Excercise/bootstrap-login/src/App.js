import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        email:'',
        password:'',
        isRemember: false
      },
      isValid: false,
      isLoggedIn: false
    }
  }
}

export default App;
