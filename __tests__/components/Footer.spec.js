import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Footer from '../../src/components/Footer'

configure({ adapter: new Adapter() })

describe('C O M P O N E N T --- <Footer/> test', () => {
    it('renders <Footer/>', () => {
        const wrapper = shallow(<Footer/>)
        expect(wrapper.type()).toEqual('div')
        expect(wrapper.childAt(0).text()).toEqual('Show: ')
        expect(wrapper.childAt(1).text()).toEqual('<Connect(Link) />')
        expect(wrapper.childAt(2).text()).toEqual('<Connect(Link) />')
        expect(wrapper.childAt(3).text()).toEqual('<Connect(Link) />')
    })
})