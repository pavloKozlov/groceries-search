import { shallow } from 'enzyme';
import HomePage from './HomePage';
import Input from '../../components/Input';
import LoadingOverflow from '../../components/LoadingOverflow';
import ResultsList from '../../components/ResultsList';

const defaultProps = {
    searchValue: '',
    isLoading: false,
    onSearchChange: jest.fn(),
    results: [],
};

describe('HomePage', () => {
    const render = (props = {}) => shallow(<HomePage {...{
        ...defaultProps,
        ...props
    }} />);

    describe('search input', () => {
        const getInput = (wrapper) => wrapper.find(Input);

        it('should render empty input with prompt for empty searchValue', () => {
            const wrapper = render();

            const input = getInput(wrapper);
            expect(input.prop('value')).toBe('');
            expect(input.prop('placeholder')).toBe('Type here...');
            expect(input.prop('disabled')).toBe(false);
        });

        it('should render search value in the input', () => {
            const searchValue = 'ber';
            const wrapper = render({ searchValue });

            const input = getInput(wrapper);
            expect(input.prop('value')).toBe(searchValue);
        });

        it('should render disabled input when isLoading === true', () => {
            const wrapper = render({ isLoading: true });

            const input = getInput(wrapper);
            expect(input.prop('disabled')).toBe(true);
        });

        it('should call onSearchChange handler when onChange method of Input is triggered', () => {
            const value = 'some-value';
            const onSearchChange = jest.fn();
            const wrapper = render({ onSearchChange });
            const input = getInput(wrapper);
            input.prop('onChange')(value);
            expect(onSearchChange).toHaveBeenCalledWith('value');
        })
    });

    describe('loading indicator', () => {
        const getLoadingIndicator = (wrapper) => wrapper.find('.home-page__search-container').find(LoadingOverflow);
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

    describe('results list', () => {
        const getResultsList = (wrapper) => wrapper.find('.home-page-results__container').find(ResultsList);
        const getEmptyMessage = (wrapper) => wrapper.find('.home-page-results__container').find('.home-page-results__empty');

        it('should not render results list and show empty message when searchValue is empty', () => {
            const wrapper = render();

            const resultsList = getResultsList(wrapper);
            expect(resultsList.exists()).toBe(false);

            const emptyMessage = getEmptyMessage(wrapper);
            expect(emptyMessage.exists()).toBe(true);
            expect(emptyMessage.text()).toEqual('Type something in');
        });

        it('should render ResultsList and pass values when searchValue is not empty', () => {
            const results = [{ a: 'a' }, { a: 'b' }];
            const wrapper = render({ searchValue: 'some-value', results });

            const resultsList = getResultsList(wrapper);
            expect(resultsList.exists()).toBe(true);
            expect(resultsList.prop('values')).toEqual(results);

            const emptyMessage = getEmptyMessage(wrapper);
            expect(emptyMessage.exists()).toBe(false);
        })
    });
});

