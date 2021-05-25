import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from './SearchInput';
import SearchInputContainer from './SearchInputContainer';

jest.mock('../../hooks/useDebounce', () => ({
    __esModule: true,
    default: (fn) => fn,
}));

const defaultProps = {
    initialValue: '',
    isLoading: false,
    onChange: jest.fn(),
};

describe('SearchInputContainer', () => {
    const render = (props) => shallow(<SearchInputContainer {...{
        ...defaultProps,
        ...props,
    }} />);

    const getSearchInput = (wrapper) => wrapper.find(SearchInput);

    beforeAll(() => {
        jest.spyOn(React, 'useEffect').mockImplementation((fn) => fn());
        jest.spyOn(React, 'useCallback').mockImplementation((fn) => fn);
    });

    it('should pass initial value to SearhInput component', () => {
        const initialValue = 'some initial value';
        const wrapper = render({ initialValue });

        const searchInput = getSearchInput(wrapper);
        expect(searchInput.prop('value')).toBe(initialValue);
    });

    it('should not change the current value if the value is changing and isloading === true', () => {
        const initialValue = 'some initial value';
        const onChange = jest.fn();
        const wrapper = render({ initialValue, isLoading: true, onChange });

        let searchInput = getSearchInput(wrapper);
        expect(searchInput.prop('value')).toBe(initialValue);

        searchInput.prop('onChange')('new value');
        searchInput = getSearchInput(wrapper);
        expect(searchInput.prop('value')).toBe(initialValue);
        expect(onChange).not.toHaveBeenCalled();
    });

    it('should change the current value if the value is changing and isloading === false', () => {
        const initialValue = 'some initial value';
        const onChange = jest.fn();
        const wrapper = render({ initialValue, isLoading: false, onChange });

        let searchInput = getSearchInput(wrapper);
        expect(searchInput.prop('value')).toBe(initialValue);

        const value = 'new value';
        searchInput.prop('onChange')(value);

        searchInput = getSearchInput(wrapper);
        expect(searchInput.prop('value')).toBe(value);
        expect(onChange).toHaveBeenCalledWith(value);
    });
});
