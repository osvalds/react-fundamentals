// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <div className={'box box--small'} style={{backgroundColor: 'lightblue'}}>small lightblue box</div>
const mediumBox = <div className={'box box--medium'} style={{backgroundColor: 'pink'}}>medium pink box</div>
const largeBox = <div className={'box box--large'} style={{backgroundColor: 'orange'}}>large orange box</div>

// const BoxSized = (props) => {
//   return <div className={`box box--${props.size}`} style={{fontStyle: 'italic', ...props.style}}>
//     {props.children}
//   </div>
// }


function Box({style, className = '', ...otherProps}) {
  return (
    <div className={`box ${className}`}
         style={{fontStyle: 'italic', ...style}}
         {...otherProps} />
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      {/*<BoxSized size="small" style={{backgroundColor: 'lightblue'}}>*/}
      {/*  small lightblue box*/}
      {/*</BoxSized>*/}

      {smallBox}

      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
