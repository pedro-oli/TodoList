import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import FilterLink from '../../src/containers/FilterLink'
import rootReducer from '../../src/reducers'
import { VisibilityFilters } from '../../src/actions'

configure({ adapter: new Adapter() })
const SHOW_ACTIVE = VisibilityFilters.SHOW_ACTIVE
const SHOW_ALL = VisibilityFilters.SHOW_ALL
const store = createStore(rootReducer)

describe('C O N T A I N E R --- FilterLink test', () => {
    it('tests onClick() changing the visibilityFilter', () => {
        const wrapper = mount(
            <Provider store={store}>
                <FilterLink active={true} children={'Active'} filter={SHOW_ACTIVE}/>
            </Provider>
        )
        expect(store.getState()).toEqual({ todos: [], visibilityFilter: SHOW_ALL })
        wrapper.find('Link').prop('onClick')()
        expect(store.getState()).toEqual({ todos: [], visibilityFilter: SHOW_ACTIVE })
    })
})