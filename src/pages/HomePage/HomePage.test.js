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

        it('should render ResultsList, pass values and correct emptyMessage when isSearchEmpty === true', () => {
            const results = [{ a: 'a' }, { a: 'b' }];
            const wrapper = render({ isSearchEmpty: true, results });

            const resultsList = getResultsList(wrapper);
            expect(resultsList.prop('values')).toEqual(results);
            expect(resultsList.prop('emptyMessage')).toBe('Type something in');
        })

        it('should render ResultsList, pass values and correct emptyMessage when isSearchEmpty === false', () => {
            const results = [{ a: 'a' }, { a: 'b' }];
            const wrapper = render({ isSearchEmpty: false, results });

            const resultsList = getResultsList(wrapper);
            expect(resultsList.prop('values')).toEqual(results);
            expect(resultsList.prop('emptyMessage')).toBe('No results');
        })
    });
});

