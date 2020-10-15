// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const ref = React.useRef()
  const [username, setUsername] = React.useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitUsername(ref.current.value)
  }

  const handleChange = (event) => {
    const value = event.target.value
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={'username'}>Username:</label>
        <input ref={ref}
               onChange={handleChange}
               value={username}
               id="username"
               name={'user'}
               type="text" />
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
