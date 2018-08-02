import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoList from '../../src/components/TodoList'
import todoApp from '../../src/reducers'
import { addTodo } from '../../src/actions'

configure({ adapter: new Adapter() })
const store = createStore(todoApp)
const toggleMock = jest.fn()

describe('C O M P O N E N T --- <TodoList/> test', () => {
    it('tests toggleTodo()', () => {
        store.dispatch(addTodo('test'))
        let todos = [ { key: 0, id: 0, text: 'test', completed: false } ]
        const wrapper = mount(
            <Provider store={store}>
                <TodoList todos={todos} toggleTodo={toggleMock}/>
            </Provider>
        )
        // wrapper.find('Todo').prop('onClick')()
        // expect(store.getState()).toEqual({
        //     todos: [ { id: 0, text: 'test', completed: true } ],
        //     visibilityFilter: 'SHOW_ALL'
        // })        
    })
})