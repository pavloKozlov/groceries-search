import React, { useCallback } from 'react';

/**
 * High Order Component that converts event.target.value to value for onChange callback.
 */
const withValueOnChange = (Component) => ({ onChange, ...props }) => {
    const memoizedOnChange = onChange && useCallback((event) => {
        onChange(event.target.value);
    }, [onChange]);

    return <Component {...{
        ...props,
        onChange: memoizedOnChange,
    }} />
}

export default withValueOnChange;