import React from 'react'
import PropTypes from 'prop-types'
import DeleteTodo from '../containers/DeleteTodo';

const Todo = ({ id, onClick, completed, text }) => (
  <li
    onClick={onClick}
    key={id}
    className={
      completed ? 'completed' : 'active'
    }>
    {text}
    <DeleteTodo id={id}/>
  </li>
)

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo