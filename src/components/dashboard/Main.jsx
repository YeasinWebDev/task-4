import React, { useState } from 'react';

const Main = () => {
  // Default data
  const [users, setUsers] = useState([
    {
      name: 'John Doe',
      role: 'Admin',
      email: 'johndoe@example.com',
      profession: 'Software Engineer',
    },
    {
      name: 'Jane Smith',
      role: 'User',
      email: 'janesmith@example.com',
      profession: 'Data Scientist',
    },
  ]);

  // State for new user input
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    profession: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new user to the list
    setUsers((prevUsers) => [...prevUsers, formData]);
    // Clear form
    setFormData({
      name: '',
      role: '',
      email: '',
      profession: '',
    });
  };

  return (
    <div className="p-6 bg-gray-100 w-full overflow-y-auto h-[93vh]">

      {/* Form for adding new user */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-6 w-[90%] mx-auto">
        <h3 className="text-lg font-bold mb-4 flex items-center justify-center">Add  <span className='text-green-500 mx-1'>New User</span></h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Role:</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Profession:</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-all duration-200 hover:scale-105"
        >
          Add User
        </button>
      </form>

      {/* Display users */}
      <div className="bg-white p-4 rounded shadow-md w-[90%] mx-auto">
        <h3 className="text-lg font-bold mb-4 flex items-center justify-center"><span className='mx-1 text-green-500'>User</span>List</h3>
        <div className="grid grid-cols-1 gap-4">
          {users.map((user, index) => (
            <div key={index} className="p-4 border rounded bg-gray-50">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Profession:</strong> {user.profession}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
