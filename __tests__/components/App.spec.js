import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import App from '../../src/components/App'

configure({ adapter: new Adapter() })

describe('C O M P O N E N T --- <App/> test', () => {
    it('renders <App/>', () => {
        const wrapper = shallow(<App/>)
        expect(wrapper.type()).toEqual('div')
        expect(wrapper.childAt(0).text()).toEqual('<Connect(AddTodo) />')
        expect(wrapper.childAt(1).text()).toEqual('<Connect(TodoList) />')
        expect(wrapper.childAt(2).text()).toEqual('<Footer />')
    })
})