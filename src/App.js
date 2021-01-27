// import React, { Component } from 'react'
// class App extends  Component {
//   render(){
//     return(
//       <React.Fragment> 
//         <label htmlFor="foo">text</label>
//         <input type='text' id="foo" onClick={() => {console.log('helloworld')}} />
//       </React.Fragment>
//     )
  
//   }

// }
import React,{ Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }

  render() {
    const users = [
      {name: "Ryota",age:23},
      {name: "Yuta",age:21},
      {name: "Ayano",age:22},
      {name: "Nakajima",age:22},
    ]

  return(
    <React.Fragment>
      {
        users.map((user,i) => {
          return <User name={user.name} age={user.age} key={i}/>
        })
      }
      <Count title={"カウントだよ"} />

    </React.Fragment>
  )  
}
}

const User = (props) => {
  return(
    <div>
      おれの名前は{props.name} 年齢{props.age}
    </div>
  )
}
User.defaultProps = {
  name: "うんち",
  age: 1111
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
} 

class Count extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }
  handleButton = (bool) => {
    if(bool){
      this.setState({count: this.state.count + 1})
    }else{
      this.setState({count: this.state.count - 1})
    }
   
  }
    render() {
      return(
        <div>
          <h1>{this.props.title}</h1>
          <div>
            今のカウント{this.state.count}
          </div>
          <button type='button' onClick={() => {this.handleButton(true)}}>+ 1</button>
          <button type='button' onClick={() => { this.handleButton(false)} }>- 1</button>
        </div>
      )
  }
}
export default App;
