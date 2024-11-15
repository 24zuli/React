import React from 'react'
class CounterHooks extends React.Component{
    constructor(props){
        super();
        this.state ={
            a:0,
            msg:"",
        };
}
increment(){
    if(this.state.a>=10){
        this.setState({msg: "Thank you "});
    }
    else{
        this.setState({a:this.state.a+1,
            msg:" ",
        });
        
}
}
decrement(){
    if(this.state.a<=0){
        this.setState({msg: "Sorry"});
    }
    else{
        this.setState({a:this.state.a-1,
             msg:" ",
            });
       
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
export default CounterHooks;