import { shallow } from 'enzyme';
import SearchInput from './SearchInput';
import Input from '../../components/Input';
import LoadingOverflow from '../../components/LoadingOverflow';

const defaultProps = {
    value: '',
    isLoading: false,
    onChange: jest.fn(),
};

describe('SearchInput', () => {
    const render = (props = {}) => shallow(<SearchInput {...{
        ...defaultProps,
        ...props
    }} />);

    describe('input', () => {
        const getInput = (wrapper) => wrapper.find(Input);

        it('should render empty input with prompt for empty value', () => {
            const wrapper = render();

            const input = getInput(wrapper);
            expect(input.prop('value')).toBe('');
            expect(input.prop('placeholder')).toBe('Type here...');
        });

        it('should render search value in the input', () => {
            const value = 'ber';
            const wrapper = render({ value });

            const input = getInput(wrapper);
            expect(input.prop('value')).toBe(value);
        });

        it('should call onChange handler when onChange method of Input component is triggered', () => {
            const value = 'some value';
            const onChange = jest.fn();
            const wrapper = render({ onChange });
            const input = getInput(wrapper);
            input.prop('onChange')(value);
            expect(onChange).toHaveBeenCalledWith(value);
        })
    });

    describe('loading indicator', () => {
        const getLoadingIndicator = (wrapper) => wrapper.find(LoadingOverflow);

        it('should not render loading indicator when isLoading === false', () => {
            const wrapper = render();

            const loadingIndicator = getLoadingIndicator(wrapper);
            expect(loadingIndicator.exists()).toBe(false);
        });

        it('should render loading indicator on top of search input when isLoading === true', () => {
            const wrapper = render({ isLoading: true });

            const loadingIndicator = getLoadingIndicator(wrapper);
            expect(loadingIndicator.exists()).toBe(true);
        });
    });
});