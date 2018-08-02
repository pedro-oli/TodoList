import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import visibilityFilter from '../../src/reducers/visibilityFilter'
import { setVisibilityFilter, VisibilityFilters } from '../../src/actions/index'

configure({ adapter: new Adapter() });
const SET_VISIBILITY_FILTER = setVisibilityFilter().type;
const SHOW_ALL = VisibilityFilters.SHOW_ALL;
const SHOW_ACTIVE = VisibilityFilters.SHOW_ACTIVE;
const SHOW_COMPLETED = VisibilityFilters.SHOW_COMPLETED;
let state, action;

describe('R E D U C E R --- visibilityFilter test', () => {
    it('tests the SET_VISIBILITY_FILTER reducer', () => {
        /* Testing default */
        action = {};
        expect(visibilityFilter(state, action)).toEqual(
            SHOW_ALL
        );

        /* Testing SHOW_ALL */
        action = {type: SET_VISIBILITY_FILTER, filter: SHOW_ALL};
        expect(visibilityFilter(state, action)).toEqual(
            SHOW_ALL
        );

        /* Testing SHOW_ACTIVE */
        action = {type: SET_VISIBILITY_FILTER, filter: SHOW_ACTIVE};
        expect(visibilityFilter(state, action)).toEqual(
            SHOW_ACTIVE
        );

        /* Testing SHOW_COMPLETED */
        action = {type: SET_VISIBILITY_FILTER, filter: SHOW_COMPLETED};
        expect(visibilityFilter(state, action)).toEqual(
            SHOW_COMPLETED
        );
    });
});