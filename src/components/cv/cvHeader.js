import React from 'react';
import PropTypes from 'prop-types';

const CvHeader = (props) => (
    <div>
        <h2>{props.firstName} {props.lastName}</h2>
    </div>
);


CvHeader.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};

export default CvHeader;
