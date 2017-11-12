import React from 'react'
import ReactDOM from 'react-dom'
import { getBoxStyle } from './PythagorasTree.js'

let heightFactor = 0.37
let lean = -0.10
let size = 100
let totalLevels = 5

const TreeBox = (props) => {
  const style = getBoxStyle({
    level: props.level,
    right: props.right,
    heightFactor,
    lean,
    size,
    totalLevels,
  })

  const leftChild =
    props.level < totalLevels &&
    React.createElement(TreeBox, {
      level: props.level + 1,
    })
  const rightChild =
    props.level < totalLevels &&
    React.createElement(TreeBox, {
      right: true,
      level: props.level + 1,
    })

  return React.createElement('div', { style },
    leftChild,
    rightChild
  )
}

ReactDOM.render(
  React.createElement(TreeBox, { level: 0 }),
  document.getElementById('app')
)

