import {shallow} from 'enzyme';
import ResultsList from './ResultsList';
import ResultItem from './ResultItem/ResultsItem';

const defaultProps = {
    values: [],
};

describe('ResultsList', () => {
    const render = (props = {}) => shallow(<ResultsList {...{
        ...defaultProps,
        ...props
    }} />);

    it('should render empty ul if there are values passed to the component', () => {
        const wrapper = render();

        const ul = wrapper.find('ul');
        expect(ul.exists()).toBe(true);

        const items = ul.find(ResultItem);
        expect(items.exists()).toBe(false);
    });

    it('shold render ul with ResultList items if there are values passed to the component', () => {
        const values = [{
            id: '1',
            name: 'name 1',
        }, {
            id: '2',
            name: 'name 2',
        }, {
            id: '3',
            name: 'name 3',
        }];
        const wrapper = render({
            values,
        });

        const ul = wrapper.find('ul');
        expect(ul.exists()).toBe(true);

        const items = ul.find(ResultItem);
        expect(items.exists()).toBe(true);
        expect(items.length).toBe(values.length);
        for (let i = 0; i < values.length; i++) {
            const item = items.get(i);
            expect(item.key).toBe(values[i].id);
            expect(item.props.value).toBe(values[i]);
        }
    });
});
