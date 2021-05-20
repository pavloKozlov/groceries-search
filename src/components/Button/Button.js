import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

/**
 * Button component.
 */
const Button = ({ id, disabled, onClick, children }) => (
    <button id={id} className="button" disabled={disabled} onClick={onClick}>{children}</button>
);

Button.propTypes = {
    id: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    disabled: false,
};

export default Button;
