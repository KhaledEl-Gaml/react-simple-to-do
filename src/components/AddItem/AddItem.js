import React, { Component } from 'react'
import './AddItem.css'
class AddItem extends Component {
    state = {
        todo : '',
        hr : ''
      } 
      handleChange =(e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e)=>{
        e.preventDefault()
        if(e.target.todo.value === ''  || e.target.hr.value === '' ){
            return false
        }else{
            this.props.addItem(this.state)
            this.setState({
                todo :"",
                hr :""
            })    
          }
        }
    render() { 
        return (
            <div>
                <form  onSubmit={this.handleSubmit}>
                    <input type="text"  id="todo" placeholder='Enter todo' onChange={this.handleChange} value={this.state.todo} />
                    <input type="number"  id="hr" placeholder='Enter hr' onChange={this.handleChange}value={this.state.hr} />
                    <input type='submit' value='Add'/>
                </form>
            </div>
        );
    }
}
 
export default AddItem;