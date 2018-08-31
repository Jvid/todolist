import React from 'react'

class addTodo extends React.Component {
  constructor(props) {
    super(props)
    this.refInput = this.refInput.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  refInput(node) {
    this.input = node
  }
  onSubmit(ev) {
    ev.preventDefault()
    const input = this.input
    if(!input.value.trim()) {return}
    this.props.onAdd(input.value);
    input.value = ''
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref={this.refInput} />
          <button type="submit">添加</button>
        </form>
      </div>
    )
  }
}
  

export default addTodo