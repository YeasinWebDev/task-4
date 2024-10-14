import { useEffect, useState } from "react";
import { PiSignInBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const Nav = () => {
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
    <div className='flex items-center justify-between border-b-[1px] border-green-500 md:px-10 px-3 py-2'>
      <h1 className='font-bold text-xl'>Dash<span className='text-green-600'>Hero</span></h1>
      <div className='flex items-center gap-2'>
        {user ? <Link
        onClick={handleLogout}
          className="p-2 text-black bg-green-500 hover:bg-green-700 hover:text-white rounded transition-all duration-200 flex items-center justify-center gap-3 font-semibold hover:scale-105"
        >
          Logout
          <IoIosLogOut size={20} />
        </Link> : <Link to={'/signin'}>
          <button className='bg-green-500 px-6 py-2 rounded-lg text-black flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200 hover:bg-green-700 font-semibold hover:text-white'>SignIn <PiSignInBold /></button>
        </Link>}
        {user ? <h1 className="hidden md:flex">{user?.name || user?.email}</h1> : <img className='w-10 rounded-full' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />}
      </div>
    </div>
  )
}

export default Nav