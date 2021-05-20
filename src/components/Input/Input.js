import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import withValueOnChange from '../../hoc/withValueOnChange';

/**
 * Input component.
 */
const Input = ({ id, name, placeholder, value, onChange }) => (
    <input
        id={id}
        name={name}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
);

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
    className: '',
};

export default withValueOnChange(Input);