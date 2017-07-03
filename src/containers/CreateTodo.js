import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTodo } from '../actions/index';


class CreateTodo extends Component {
  constructor(props){
    super(props);

    this.state = {
      todoText: '',
    }
  }
  handleInput = (e) => {
    this.setState({todoText: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({todoText: ''});
    this.props.createTodo(this.state.todoText);
  }
  render() {
    return (
      <div className="input-form">
        <form onSubmit={this.handleSubmit} className="input-group">

          <input
            type="text"
            className="form-control"
            placeholder="Create a Todo List Item..."
            value={this.state.todoText}
            onChange={this.handleInput}/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-warning">Create Todo!</button>
          </span>


        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(CreateTodo);
