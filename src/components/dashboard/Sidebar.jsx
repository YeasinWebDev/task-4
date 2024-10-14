import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { PiSignInBold } from "react-icons/pi";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const [user, setuser] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem('userData')
    if (data) {
      setuser(JSON.parse(data))
    } else {
      setuser(null)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('userData')
    setuser(null)
    window.location.reload();
  }


  return (
    <div>
      {/* Sidebar for larger screen */}
      <div className="hidden md:flex flex-col h-[93vh] bg-white text-black border-r-[1px] border-green-600 w-48 p-4">
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard"
                className="block p-2 hover:bg-green-700 hover:text-white rounded transition-all duration-200 font-semibold hover:p-3"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block p-2 hover:bg-green-700 hover:text-white rounded transition-all duration-200 font-semibold hover:p-3"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block p-2 hover:bg-green-700 hover:text-white rounded transition-all duration-200 font-semibold hover:p-3"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4">
        {!user ? <Link to={'/signin'}>
            <button className='bg-green-500 px-6 py-2 rounded-lg text-black flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200 hover:bg-green-700 font-semibold hover:text-white'>SignIn <PiSignInBold /></button>
          </Link> : <Link
            onClick={handleLogout}
            className="p-2 text-black bg-green-500 hover:bg-green-700 hover:text-white rounded transition-all duration-200 flex items-center justify-center gap-3 font-semibold hover:scale-105"
          >
            Logout
            <IoIosLogOut size={20} />
          </Link>}
        </div>
      </div>

      {/* Sidebar for smaller screen */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white text-black border-r-[1px] border-green-600 w-60 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <nav className="flex-1 p-4">
          <h1 className='font-bold text-xl border-b-2 border-green-500 mb-3 pb-2'>Dash<span className='text-green-600'>Hero</span></h1>
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard"
                className="block p-2 hover:bg-green-700 hover:text-white rounded transition-all duration-200 font-semibold hover:p-3"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block p-2 hover:bg-green-700 hover:text-white rounded transition-all duration-200 font-semibold hover:p-3"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block p-2 hover:bg-green-700 hover:text-white rounded transition-all duration-200 font-semibold hover:p-3"
              >
                Settings
              </Link>
            </li>
            <li className="block p-2 hover:bg-green-700 hover:text-white rounded transition-all duration-200 font-semibold hover:p-3">
              {user?.name || user?.email}
            </li>
          </ul>
        </nav>
        <div className="p-4">
          {!user ? <Link to={'/signin'}>
            <button className='bg-green-500 px-6 py-2 rounded-lg text-black flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200 hover:bg-green-700 font-semibold hover:text-white'>SignIn <PiSignInBold /></button>
          </Link> : <Link
            onClick={handleLogout}
            className="p-2 text-black bg-green-500 hover:bg-green-700 hover:text-white rounded transition-all duration-200 flex items-center justify-center gap-3 font-semibold hover:scale-105"
          >
            Logout
            <IoIosLogOut size={20} />
          </Link>}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
