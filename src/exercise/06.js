// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const ref = React.useRef()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target)
    onSubmitUsername(ref.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={"username"}>Username:</label>
        <input ref={ref} id="username" name={"user"} type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
