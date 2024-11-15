import React from 'react';
class CounterLimit extends React.Component{
    constructor(props){
        super();
        this.state ={
            a:0,
            msg:"",
        };
    }
    increment(){
        if(this.state.a>=10){
            this.setState({msg: "Thank you "})
        }
        else{
            this.setState({a:this.state.a+1})
        }
    }

    decrement(){
        if(this.state.a<=0){
            this.setState({msg: "Sorry"})
        }
        else{
            this.setState({a:this.state.a-1})
        }
    }

 render(){
    return(
        <div>
            <h1> Value of a is {this.state.a}</h1>
            <button onClick={this.increment.bind(this)}>Click Me</button>
          <button onClick={this.decrement.bind(this)}>Click Me</button>
          <p>{this.state.msg}</p>
        </div>
    )
 }
}
export default CounterLimit;