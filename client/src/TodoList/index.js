import React, {Component} from 'react'
import {view as Todos} from './todos/'
// import {view as Filter} from './filter/'

function List() {
  return (
    <div>
      <Todos />
      {/* <Filter /> */}
    </div>
  )
}

export default List