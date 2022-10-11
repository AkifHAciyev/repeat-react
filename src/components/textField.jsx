import React from "react";
import PropTypes from "prop-types";

const TextField = ({ lable, type, name, value, onChange, error }) => {
    return (
        <div>
            <label htmlFor={name}>{lable}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && <p>{error}</p>}
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    lable: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;
