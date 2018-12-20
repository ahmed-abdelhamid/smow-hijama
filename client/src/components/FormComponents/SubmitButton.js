import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { Button } from 'reactstrap';

const SubmitButton = ({ dispatch }) => (
  <div className="d-flex justify-content-center mb-3">
    <Button
      className="button--submit"
      onClick={() => dispatch(submit('contactForm'))}
    >
      Submit
    </Button>
  </div>
);

export default connect()(SubmitButton);
