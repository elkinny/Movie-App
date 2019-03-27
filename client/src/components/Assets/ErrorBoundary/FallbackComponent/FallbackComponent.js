import React from 'react';
import PropTypes from 'prop-types';

const FallbackComponent = props => {
  const { errorName, componentStack } = props;
  return (
    <div>
      <p>
        <strong>Oops! An error occured!</strong>
      </p>
      <p>Here’s what we know…</p>
      <p>
        <strong>Error:</strong> {errorName}
      </p>
      <p>
        <strong>Stacktrace:</strong> {componentStack}
      </p>
    </div>
  );
};

FallbackComponent.propTypes = {
  errorName: PropTypes.func.isRequired,
  componentStack: PropTypes.string.isRequired,
};

export default FallbackComponent;
