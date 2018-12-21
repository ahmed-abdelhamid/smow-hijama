import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

class SubmitButton extends Component {
  render() {
    const { dispatch, handleClick } = this.props;
    return (
      <div className="d-flex justify-content-center mb-3">
        <Button
          className="button--submit"
          onClick={() => handleClick(dispatch)}
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default connect()(SubmitButton);
