import { useState } from "react"

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin({ username, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email-address">
        Username:
      </label>
      <input
        id="email-address"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="password">
        Password:
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}