import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';
import withValueOnChange from '../../hoc/withValueOnChange';

/**
 * Input component.
 */
const Input = ({ id, name, placeholder, value, onChange, className }) => {
    let cssClassNames = 'input';
    if (className !== '') {
        cssClassNames += ' ' + className;
    }
    return (
        <input
            id={id}
            name={name}
            className={cssClassNames}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
};

Input.defaultProps = {
    className: '',
};

export default withValueOnChange(Input);