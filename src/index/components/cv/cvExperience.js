
import React from 'react';
import PropTypes from 'prop-types';

const CvExperience = ({ experience }) => (
    <div>
        {(experience.length > 0) &&
            experience.map((index, item) =>
                <div key={index}>
                    <h3>{item}</h3> <br />
                </div>
            )
        }
    </div>
);


CvExperience.propTypes = {
    experience: PropTypes.array.isRequired,
};

export default CvExperience;
