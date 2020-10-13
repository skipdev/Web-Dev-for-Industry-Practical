// src/Components/DaysCompleted.js

import React from "react";
import PropTypes from "prop-types";

function DaysCompleted(props) {
    const { days } = props;

    return (
        <div>
            <h1> {days} Days Completed</h1>
        </div>
    );
}

DaysCompleted.propTypes = {
    days: PropTypes.number.isRequired,
};

DaysCompleted.defaultProps = {
    days: 0,
};

export default DaysCompleted;