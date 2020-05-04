import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks:[],
      item:"",
     

     
     }
  }
  Add=()=>{
    this.setState({
      tasks:[...this.state.tasks,{id:Math.random(),item:this.state.item,isUndo:false}]
    })
  }
  Undo=(task)=>{
    this.setState({
      tasks:this.state.tasks.map(el=>(el.id===task)?{id:el.id,item:el.item,isUndo:true}:el)
    })

  }
  Delete=(id)=>{
    this.setState({
      tasks:this.state.tasks.filter(el=>el.id!==id)
    })

  }
  handelchange=(e)=>{
    this.setState({
      item:e.target.value
    })
  }

  render() { 
    return ( <div>
    <div className="div1">
    <h1 className="class1">TO-DO APP!</h1>
    <h6>Add new TO-DO</h6>
    <input type="text" class="input" placeholder="Enter new task" onChange={this.handelchange}/>
    <button class="button" onClick={this.Add} >Add</button>
    </div>
    <div>
    {this.state.tasks.map(el=><div key={el.id}>
    <button onClick={()=>this.Undo(el.id)}>{(el.isUndo)?"undo":"complete"}</button>
    <button onClick={()=>this.Delete(el.id)}>Delete</button>
    < span style={{textDecoration:(el.isUndo&&"line-through")}}>{el.item}</span>


  
 
  </div>)}
  </div>

  </div>);
  }
}

 
export default App;
