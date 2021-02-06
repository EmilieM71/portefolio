import React from 'react';
import PropTypes from 'prop-types';

function PartTitle({ title }) {
  return (
    <>
      <h1 className="title m-5 text-uppercase">{title}</h1>
      <div className="border-title mx_auto pb-5"> </div>
    </>
  );
}

PartTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PartTitle;
