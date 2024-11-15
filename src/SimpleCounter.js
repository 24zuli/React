import React from 'react';
class SimpleCounter extends React.Component{
    constructor(){
        super();
        this.state ={
            a:0,
        };
    }
    
    buttonClick() {
        this.setState({
          a: this.state.a + 1,
        });
      }
    
      buttonClick2() {
        this.setState({
          a: this.state.a - 1,
        });
      }
    
    render(){
        return(
            <div>
                <h1> SimpleCounter</h1>
                <h1>Value is {this.state.a}</h1>
    
          <button onClick={this.buttonClick.bind(this)}>Click Me</button>
          <button onClick={this.buttonClick2.bind(this)}>Click Me</button>
          

            </div>
        )
    }
}
export default SimpleCounter;
