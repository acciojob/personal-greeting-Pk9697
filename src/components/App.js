import React from 'react'
import './../styles/App.css'

const App = () => {
  const [name, setName] = React.useState('')

  const handleChange = (e) => {
    const { value } = e.target
    setName(value)
  }

	return (
		<div>
			{/* Do not remove the main div */}
			<label htmlFor='name'>Enter your name: </label>
      <input type='text' id='name' name='name' value={name} onChange={handleChange} />
      {name && <p>Hello {name}!</p>}
		</div>
	)
}

export default App
