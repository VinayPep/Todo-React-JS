import React, { Component } from 'react'
import Todos from './Todos'

export default class AddTodo extends Component {
  render() {
    return (
      <>
        <h1 className="text-center">ToDo App in ReactJS</h1>
        <Todos />
      </>
    )
  }
}
