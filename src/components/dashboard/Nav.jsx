import { PiSignInBold } from "react-icons/pi";

const Nav = () => {
  return (
    <div className='flex items-center justify-between border-b-[1px] border-green-500 md:px-10 px-3 py-2'>
      <h1 className='font-bold text-xl'>Dash<span className='text-green-600'>Hero</span></h1>
      <div className='flex items-center gap-2'>
        <button className='bg-green-500 px-6 py-2 rounded-lg text-black flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200 hover:bg-green-700 font-semibold hover:text-white'>SignIn <PiSignInBold/></button>
        <img className='w-10 rounded-full' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
      </div>
    </div>
  )
}

export default Nav