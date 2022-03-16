import React, { Component } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state={
    fullName:"Walter Hartwell",bio:"Walter is the main character of the Breaking Bad series created by Vince Gilligan", 
    imgSrc:"https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png", profession:"Acteur",
    Doshow:true,
    seconds:0 ,
    minutes:0 ,
    hours:0
  }
  handelShow=()=>{
    this.setState({Doshow:!this.state.Doshow})
  }
  Increament=()=>{
    this.setState({seconds:this.state.seconds+1})
  }
 decreament=()=>{
    this.setState({seconds:this.state.seconds-1})
  }
  componentDidMount(){
    console.log("componentDidMount");
    setInterval(() => {
    this.setState({seconds:this.state.seconds+1}) 
 

    }, 1000)
  }
 
  // componentDidUpdate(){
  //   console.log("componentDidUpdate");
  // }
  // componentWillUnmount(){
  //   console.log("componentWillUnmount");
  // }
  render() {
    return (
      <div >
        {
         this.state.Doshow&&
          <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={this.state.imgSrc} alt=""/>
            <div class="card-body">
            
            <h5 class="card-title"> {this.state.fullName} ({this.state.profession})</h5>
            <p class="card-text">{this.state.bio}</p>
           
              
          </div>
          </div>
        }
        <button type="button" class="btn btn-primary" onClick={this.handelShow}>SHOW</button>
        <div className='App'>
          <h2> {this.state.hours}:{this.state.minutes}:{this.state.seconds} </h2>
          <button type="button" class="btn btn-danger" onClick={this.Increament}>+</button>
          <button type="button" class="btn btn-warning" onClick={this.decreament}>-</button>
        </div>
      </div>
    )
  }
}
