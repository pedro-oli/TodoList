import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AddTodo from '../../src/containers/AddTodo'
import rootReducer from '../../src/reducers'

configure({ adapter: new Adapter() })
const store = createStore(rootReducer)

describe('C O N T A I N E R --- AddTodo test', () => {
    it('renders and tests empty input', () => {
        let wrapper = mount(
            <Provider store={store}>
                <AddTodo />
            </Provider>
        )
        wrapper.find('input').instance().value = ''
        const form = wrapper.find('form').at(0)
        const children = form.render().children().children()
        form.simulate('submit', { target: { children } })
        expect(store.getState()).toEqual({ todos: [], visibilityFilter: 'SHOW_ALL' })
    })

    it('renders and tests not empty input', () => {
        let wrapper = mount(
            <Provider store={store}>
                <AddTodo />
            </Provider>
        )
        wrapper.find('input').instance().value = 'test'
        const form = wrapper.find('form').at(0)
        const children = form.render().children().children()
        form.simulate('submit', { target: { children } })
        expect(store.getState()).toEqual({
            todos: [ { id: 0, text: 'test', completed: false } ],
            visibilityFilter: 'SHOW_ALL'
        })
    })
})