import React, { Component } from 'react';
import TodoItems from './components/TodoItem/TodoItems';
import AddItem from './components/AddItem/AddItem';
class App extends Component {
  state = {
    items:[
      {id:1 , todo:'Learning React' , hr:20},
      {id:2 , todo:'Solve AlgoExpert' , hr:7},
      {id:3 , todo:'Watching Netflix' , hr:4},
    ]
    } 
    //delete items
    // deleteItem =(id)=>{
    ////first we need to get all items
    //   const items = this.state.items
    ////to get the index of the desired deleted element
    //   let i =items.findIndex((item)=>(item.id === id))
    //// just delete the element using the splice method
    //   items.splice(i , 1)
    //// then we have to update the state with the new item list we created
    //   this.setState({items})
    // }
    //another way using filter method
    deleteItem = (id) =>{
      let items = this.state.items.filter((item)=>{
        return item.id !== id
      })
      this.setState({items})
    }

    addItem = (item)=>{
      item.id = Math.random() *10
      let items = this.state.items
      items.push(item)
      this.setState({items})
      console.log(this.state);
    }
  render() { 
    return (
      <div className='App container'>
        <h2 className='text-center'>To Do App</h2>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem ={this.addItem}/>
      </div>
    );
  }
}
 
export default App;