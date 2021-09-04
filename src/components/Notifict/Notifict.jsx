import React from 'react';
import PropTypes from 'prop-types';

 const Notifict = ({ message }) => {
  return <p>{message}</p>;
};

Notifict.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notifict