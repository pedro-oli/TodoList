import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'

let DeleteTodo = ({id, dispatch}) => {
    return (
        <div
            className="deleteLink"
            onClick={e => {
                e.preventDefault()
                dispatch(deleteTodo(id))
            }}>
            Delete
        </div>
    )
}

export default connect()(DeleteTodo)