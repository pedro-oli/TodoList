import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import combineReducers from '../../src/reducers/index'
import { createStore } from 'redux';
import { addTodo, VisibilityFilters, setVisibilityFilter } from '../../src/actions'

configure({ adapter: new Adapter() })
const SHOW_ACTIVE = VisibilityFilters.SHOW_ACTIVE
const SET_VISIBILITY_FILTER = setVisibilityFilter().type
const ADD_TODO = addTodo().type
let store = createStore(combineReducers)

describe('R E D U C E R --- index test', () => {
    it('tests combineReducers()', () => {
        /* Testing visibilityFilter */
        let action = { type: SET_VISIBILITY_FILTER, filter: SHOW_ACTIVE }
        store.dispatch(action)
        expect(store.getState().visibilityFilter).toEqual(SHOW_ACTIVE)
        expect(store.getState().todos).toEqual([])

        /* Testing todos */
        action = { type: ADD_TODO }
        store.dispatch(action)
        expect(store.getState().visibilityFilter).toEqual(SHOW_ACTIVE)
        expect(store.getState().todos).toEqual([
            { id: undefined, text: undefined, completed: false }
        ])
    })
})