import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Button component.
 */
const Button = ({ id, disabled, onClick, children, className }) => {
    let cssClassNames = 'button';
    if (className !== '') {
        cssClassNames += ' ' + className;
    }
    return (
        <button id={id} className={cssClassNames} disabled={disabled} onClick={onClick}>{children}</button>
    );
}

Button.propTypes = {
    id: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    disabled: false,
};

export default Button;
