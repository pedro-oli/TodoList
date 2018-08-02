import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { addTodo } from '../../src/actions/index'

configure({ adapter: new Adapter() })
const ADD_TODO = addTodo().type

describe('A C T I O N --- index test', () => {
    it('tests the addTodo() id increment', () => {
        let addTodoTest
        for(let i = 1; i < 100; i++) {
            addTodoTest = addTodo('test' + i)
            expect(addTodoTest).toEqual({ type: ADD_TODO, id: i, text: 'test' + i })
        }
    })
})