import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import VisibleTodoList from '../../src/containers/VisibleTodoList'
import rootReducer from '../../src/reducers'
import { setVisibilityFilter, VisibilityFilters, addTodo, deleteTodo } from '../../src/actions'

configure({ adapter: new Adapter() })
const store = createStore(rootReducer)
const SHOW_ALL = VisibilityFilters.SHOW_ALL
const SHOW_ACTIVE = VisibilityFilters.SHOW_ACTIVE
const SHOW_COMPLETED = VisibilityFilters.SHOW_COMPLETED

describe('C O N T A I N E R --- VisibleTodoList test', () => {
    it('tests all filters and dispatch', () => {
        let wrapper = mount(
            <Provider store={store}>
                <VisibleTodoList />
            </Provider>
        )

        /* Initial state */
        store.dispatch(setVisibilityFilter(SHOW_ALL))
        expect(store.getState()).toEqual({ todos: [], visibilityFilter: SHOW_ALL })

        /* active filter */
        store.dispatch(setVisibilityFilter(SHOW_ACTIVE))
        expect(store.getState()).toEqual({ todos: [], visibilityFilter: SHOW_ACTIVE })

        /* completed filter */
        store.dispatch(setVisibilityFilter(SHOW_COMPLETED))
        expect(store.getState()).toEqual({ todos: [], visibilityFilter: SHOW_COMPLETED })

        /* dispatch (toggleTodo) */
        store.dispatch(addTodo('test'))
        store.dispatch(setVisibilityFilter(SHOW_ALL))
        wrapper.update()
        wrapper.find('Todo').prop('onClick')()
        expect(store.getState()).toEqual({
            todos: [ { id: 0, text: 'test', completed: true } ],
            visibilityFilter: 'SHOW_ALL'
        })

        /* default filter */
        store.dispatch(setVisibilityFilter(SHOW_ACTIVE)) // does not show the Todo added above
        wrapper.update()
        expect(wrapper.find('li')).toHaveLength(0)
        store.dispatch(setVisibilityFilter('test')) // default resets the visibility to SHOW_ALL
        wrapper.update()
        expect(wrapper.find('li')).toHaveLength(1)
    })
})