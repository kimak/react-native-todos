import React from 'react';
import Error from '../Error';

const withErrorMessage = Component => props => {
  if (props.error) {
    return <Error message={props.error.message} />;
  }
  return <Component {...props} />;
};

export default withErrorMessage;
