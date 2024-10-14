import React, { useState } from 'react';
import Nav from '../components/dashboard/Nav';
import Sidebar from '../components/dashboard/Sidebar';
import Main from '../components/dashboard/Main';
import { FiMenu } from 'react-icons/fi'; 

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <Nav />
      <div className="md:hidden p-4">
        <FiMenu 
          className="text-3xl cursor-pointer" 
          onClick={toggleSidebar} 
        />
      </div>
      
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}  />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
