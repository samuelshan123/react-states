import React from "react";
import {useState} from "react";

export default function ReactState(){
  return(
    <div>
    {/* <h1>Welcome to state</h1> */}
      {/* <DefaultState/> */}
      <ReactHooks/>
    </div>
  )
}

export default function ReactHooks(){

  const [count,setCount]=useState(0)


  return(
    <div>
      <h1> This is use state</h1>
      <h1>count {count}</h1>
      <button onClick={()=>setCount(count+1)}>Add count</button>

    </div>
  )
}

export class DefaultState extends React.Component{
  
  constructor(props){
    // console.log(props)
    super(props)
    this.state={date:new Date(),count:0}
  }
add=()=>this.setState({
  count:this.state.count+1
})

  render(){
    const a =new Date()

    return(
      <div style={{backgroundColor: "lightblue"}}>
  <h1>Welcome to Default state</h1>
      <h1>Default state time {this.state.date.getFullYear()}</h1>
      {/* <h1>variable time {a.getHours()}</h1> */}
          <h1>count {this.state.count}</h1>
      <button onClick={this.add}>Add count</button>

      </div>
    

    )
  }
}