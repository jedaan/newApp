
import React from 'react';
import PropTypes from 'prop-types';

const CvContactInfo = (props) => (
    <div>
        <h4>{props.phone} {props.email}</h4>
    </div>
);


CvContactInfo.propTypes = {
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default CvContactInfo;
