import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMemo } from '../actions/books';


class FindForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      find:''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }


  doChange(e){
    this.setState({
      find: e.target.value
    });
  }


  doAction(e){
    e.preventDefault();
    let action = findMemo(this.state.find);
    this.props.dispatch(action);
  }


  render(){
    return (
      <form onSubmit={this.doAction}>
        <input type="text" size="10" onChange={this.doChange}
          style={{ fontSize: 30 }} 
          value={this.state.message} />
        <input type="submit" style={{ height:50}} value="検索"/>
      </form>
    );
  }
}
export default connect((state)=>state)(FindForm);
