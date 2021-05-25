import {shallow} from 'enzyme';
import SearchInput from './SearchInput';
import Input from '../../components/Input';

const defaultProps = {
    value: '',
    onChange: jest.fn(),
};

describe('search input', () => {
    const render = (props = {}) => shallow(<SearchInput {...{
        ...defaultProps,
        ...props
    }} />);

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