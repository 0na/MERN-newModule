import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class Posts extends Component {
  render() {
    return (
      <div>
        <h2>Post History</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Posts.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
