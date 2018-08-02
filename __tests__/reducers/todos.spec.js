import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import todos from '../../src/reducers/todos'
import { addTodo, toggleTodo, deleteTodo } from '../../src/actions/index'

configure({ adapter: new Adapter() })
const ADD_TODO = addTodo().type
const TOGGLE_TODO = toggleTodo().type
const DELETE_TODO = deleteTodo().type
let state, action

describe('R E D U C E R --- todos test', () => {
    it('tests the default reducer', () => {
        action = { type: '' }
        /* Testing initial state (empty TodoList) */
        expect(todos(state, action)).toEqual([])

        /* Testing other states (not empty TodoList) */
        state = [ { id: 0, text: 'test_default', completed: false } ]
        expect(todos(state, action)).toEqual(
            [ { id: 0, text: 'test_default', completed: false } ]
        )
    })

    it('tests the ADD_TODO reducer', () => {
        /* Testing initial state (empty TodoList) */
        state = []
        action = { type: ADD_TODO, id:0, text: 'test_add_0' }
        expect(todos(state, action)).toEqual(
            [ { id: 0, text: 'test_add_0', completed: false } ]
        )

        /* Testing other states (not empty TodoList) */
        state = [ { id: 0, text: 'test_add_0', completed: false } ]
        action = { type: ADD_TODO, id:1, text: 'test_add_1' }
        expect(todos(state, action)).toEqual(
            [
                { id: 0, text: 'test_add_0', completed: false },
                { id: 1, text: 'test_add_1', completed: false }
            ]
        )
    })

    it('tests the TOGGLE_TODO reducer', () => {
        /* Testing 'completed = true' (completing a task on TodoList) */
        state = [ { id: 0, text: 'test_toggle', completed: false }]
        action = { type: TOGGLE_TODO, id: 0 }
        expect(todos(state, action)).toEqual(
            [ { id: 0, text: 'test_toggle', completed: true } ]
        )

        /* Testing 'completed = false' (uncompleting a task on TodoList) */
        state = [ { id: 0, text: 'test_toggle', completed: true }]
        expect(todos(state, action)).toEqual(
            [ { id: 0, text: 'test_toggle', completed: false } ]
        )

        /* Testing todo.id different from action.id (nothing changes) */
        state = [ { id: 0, text: 'test_toggle', completed: false }]
        action = { type: TOGGLE_TODO, id: 1 }
        expect(todos(state, action)).toEqual(
            [ { id: 0, text: 'test_toggle', completed: false } ]
        )
    })

    it('tests the DELETE_TODO reducer', () => {
        action = { type: DELETE_TODO, id:0 }

        /* Testing initial state (empty TodoList) */
        state = []
        expect(todos(state, action)).toEqual([])

        /* Testing second states (exactly 1 task in TodoList) */
        state = [ { id: 0, text: 'test_delete', completed: false }]
        expect(todos(state, action)).toEqual([])

        /* Testing other states (more than 1 task in TodoList) */
        state = [
            { id: 0, text: 'test_delete0', completed: false },
            { id: 1, text: 'test_delete1', completed: false },
        ]
        expect(todos(state, action)).toEqual(
            [ { id: 1, text: 'test_delete1', completed: false } ]
        )
    })
})