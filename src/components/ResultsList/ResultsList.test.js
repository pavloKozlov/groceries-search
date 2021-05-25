import {shallow} from 'enzyme';
import ResultsList from './ResultsList';
import ResultItem from './ResultItem/ResultsItem';

const defaultProps = {
    values: [],
    emptyMessage: 'some message'
};

describe('ResultsList', () => {
    const render = (props = {}) => shallow(<ResultsList {...{
        ...defaultProps,
        ...props
    }} />);

    describe('list', () => {
        const getList = (wrapper) => wrapper.find('ul');

        it('should render empty ul if there are values', () => {
            const wrapper = render();
    
            const ul = getList(wrapper);
            expect(ul.exists()).toBe(true);
    
            const items = ul.find(ResultItem);
            expect(items.exists()).toBe(false);
        });
    
        it('shold render ul with ResultList items if there are values', () => {
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
    
            const ul = getList(wrapper);
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

    describe('empty message', () => {
        const getEmptyMessage = (wrapper) => wrapper.find('.results-list__empty');
        
        it('should not render empty message if there are values', () => {
            const emptyMessage = 'some empty message';
            const wrapper = render({
                values: [{
                    id: '1',
                    name: 'name 1',
                }],
                emptyMessage,
            });
    
            const message = getEmptyMessage(wrapper)
            expect(message.exists()).toBe(false);
        });

        it('should render empty message if there are no values', () => {
            const emptyMessage = 'some empty message';
            const wrapper = render({
                values: [],
                emptyMessage,
            });
    
            const message = getEmptyMessage(wrapper)
            expect(message.exists()).toBe(true);
            expect(message.text()).toBe(emptyMessage);
        });
    });
});
