import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Todo from '../../src/components/Todo'
import todoApp from '../../src/reducers'

configure({ adapter: new Adapter() })
const store = createStore(todoApp)

describe('C O M P O N E N T --- <Todo/> test', () => {
    it('tests onClick()', () => {
        const onClickMock = jest.fn()
        const wrapper = mount(
            <Provider store={store}>
                <Todo id={0} onClick={onClickMock} completed={true} text={'test'} />
            </Provider>
        )
        wrapper.find('Todo').prop('onClick')()
        expect(onClickMock).toHaveBeenCalledTimes(1)
    })

    it('tests the className attribute', () => {
        /* Active Todo */
        let wrapper = mount(
            <Provider store={store}>
                <Todo id={0} onClick={jest.fn()} completed={false} text={'test'} />
            </Provider>
        )
        expect(wrapper.find('li').hasClass('active'))

        /* Completed Todo */
        wrapper = mount(
            <Provider store={store}>
                <Todo id={0} onClick={jest.fn()} completed={true} text={'test'} />
            </Provider>
        )
        expect(wrapper.find('li').hasClass('completed'))
    })
})