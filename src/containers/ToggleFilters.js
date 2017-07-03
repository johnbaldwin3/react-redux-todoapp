import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleFilter } from '../actions/index';

class ToggleFilters extends Component {
  constructor(props){
    super(props);

    // this.state = {
    //   selectedFilter: "showAll",
    // }
  }
  handleOptionChange = (e) => {
    let option = e.target.value;
    //this.setState({selectedFilter: option});
    //console.log('option', option);
    //console.log("optionState", this.state.selectedFilter);
    this.props.toggleFilter(option)
  }
  render() {
    return (
      <form>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input
              className="form-check-input"
              onChange={this.handleOptionChange}
              checked={this.props.selectedFilter === 'showAll'}
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadioShowAll"
              value="showAll" /> {"Show All"}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input
              className="form-check-input"
              onChange={this.handleOptionChange}
              checked={this.props.selectedFilter === 'showCompleted'}
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadioShowCompleted"
              value="showCompleted" /> {"Show Completed"}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input
              className="form-check-input"
              onChange={this.handleOptionChange}
              checked={this.props.selectedFilter === 'showIncomplete'}
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadioShowIncomplete"
              value="showIncomplete" /> {"Show Incomplete"}
          </label>
        </div>
      </form>
      );
    }
};

const mapStateToProps = state => {
  return {
    selectedFilter: state.selectedFilter
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({toggleFilter}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ToggleFilters);
