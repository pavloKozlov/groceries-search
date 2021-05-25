import { shallow } from 'enzyme';
import HomePage from './HomePage';
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

