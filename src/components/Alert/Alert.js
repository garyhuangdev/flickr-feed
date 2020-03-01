import React from 'react';
import { Alert as Warning } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Alert = ({ alertHeading, alertContent, variant }) => {
  return (
    <Warning
      variant={variant}
      className="alert animated bounceInDown text-center"
    >
      <Warning.Heading>{alertHeading}</Warning.Heading>
      <p>{alertContent}</p>
    </Warning>
  );
};

Alert.propTypes = {
  alertHeading: PropTypes.string,
  alertContent: PropTypes.string,
  variant: PropTypes.string
};

export default Alert;
