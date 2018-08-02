import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DeleteTodo from '../../src/containers/DeleteTodo'
import rootReducer from '../../src/reducers'
import { addTodo, VisibilityFilters } from '../../src/actions'

configure({ adapter: new Adapter() })
const store = createStore(rootReducer)
const SHOW_ALL = VisibilityFilters.SHOW_ALL

describe('C O N T A I N E R --- DeleteTodo test', () => {
    it('tests onClick() deleting a task', () => {
        const wrapper = mount(
            <Provider store={store}>
                <DeleteTodo id={0}/>
            </Provider>
        )
        /* Initial state */
        expect(store.getState()).toEqual({ todos: [], visibilityFilter: SHOW_ALL })

        /* Adding a task to be removed */
        store.dispatch(addTodo('teste'))
        expect(store.getState()).toEqual({
            todos: [ { id: 0, text: 'teste', completed: false } ],
            visibilityFilter: SHOW_ALL
        })

        /* Removing task */
        wrapper.find('div').simulate('click', { preventDefault() {} })
        expect(store.getState()).toEqual({
            todos: [], visibilityFilter: SHOW_ALL
        })
    })
})