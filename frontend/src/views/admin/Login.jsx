import { memo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:4000/users', { 
        email,
        password,
      });
      console.log('Login successful:', response.data)
      navigate('/dashboard')
    } catch (error) {
      console.error('Error:', error)
      setError(error.response ? error.response.data.message : 'Failed to login')
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4" style={{ width: '350px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Don’t have an account? <Link to="/create-account">Create Account</Link>
        </p>
      </div>
    </div>
  )
}

export default memo(Login)
