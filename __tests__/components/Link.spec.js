import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Link from '../../src/components/Link'

configure({ adapter: new Adapter() })

describe('C O M P O N E N T --- <Link/> test', () => {
    it('renders <Link/>', () => {
        const wrapper = shallow(<Link active={true} children={''} onClick={jest.fn()} />)
        expect(wrapper.type()).toEqual('button')
    })
})