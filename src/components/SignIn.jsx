import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [inputData, setinputData] = useState(
    {
      email: '',
      password: '',
    }
  )

  const handleChange = (e) => {
    setinputData(p => (
      {...p, [e.target.name]: e.target.value }
    ))
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    localStorage.setItem('userData', JSON.stringify(inputData))
    window.location.href = '/'
  }


  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-96">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="Email"
                name='email'
                value={inputData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                name='password'
                value={inputData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
            >
              Login
            </button>
          </form>
          <div className="flex justify-between items-center mt-4">
            <Link to="/forgot-password" className="text-sm text-green-500 hover:underline">Forgot Password?</Link>
            <Link to="/signup" className="text-sm text-green-500 hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn