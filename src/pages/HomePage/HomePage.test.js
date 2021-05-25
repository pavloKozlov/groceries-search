import { shallow } from 'enzyme';
import HomePage from './HomePage';
import LoadingOverflow from '../../components/LoadingOverflow';
import ResultsList from '../../components/ResultsList';

const defaultProps = {
    initialSearchValue: '',
    isSearchEmpty: false,
    isLoading: false,
    onSearchChange: jest.fn(),
    results: [],
};

describe('HomePage', () => {
    const render = (props = {}) => shallow(<HomePage {...{
        ...defaultProps,
        ...props
    }} />);

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

        it('should not render results list and show empty message when isSearchEmpty === true', () => {
            const results = [{ a: 'a' }, { a: 'b' }];
            const wrapper = render({ isSearchEmpty: true, results });

            const resultsList = getResultsList(wrapper);
            expect(resultsList.exists()).toBe(false);

            const emptyMessage = getEmptyMessage(wrapper);
            expect(emptyMessage.exists()).toBe(true);
            expect(emptyMessage.text()).toEqual('Type something in');
        });

        it('should render ResultsList and pass values when isSearchEmpty === false', () => {
            const results = [{ a: 'a' }, { a: 'b' }];
            const wrapper = render({ isSearchEmpty: false, results });

            const resultsList = getResultsList(wrapper);
            expect(resultsList.exists()).toBe(true);
            expect(resultsList.prop('values')).toEqual(results);

            const emptyMessage = getEmptyMessage(wrapper);
            expect(emptyMessage.exists()).toBe(false);
        })
    });
});

