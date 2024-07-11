import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../assets/opallogo.png"



function Navbar() {
    const Navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen = (!isDropdownOpen)
    }
    return (
        <>
            <nav className='fixed top-0 right-0 left-0 px-4 bg-white shadow-md z-10'>
                <div className='relative flex flex-row lg:flex-nowrap justify-between items-center'>
                    <Link to={'/'} >
                        <img src={Logo} alt="Logo" className= 'w-1/2'/>
                    </Link>

        <div className="flex lg:order-2">
            <button onClick={toggleDropdown} type="button" className="lg:hidden text-[#007300] hover:text-[#007300] focus:outline-none focus:ring-2 focus:ring-[#007300] rounded-lg inline-flex items-center justify-end">
              <svg className={`w-8 h-8 ${isDropdownOpen ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg className={`w-8 h-8 ${isDropdownOpen ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div> 

                    <div className={`lg:flex lg:items-center w-full lg:w-auto lg:order-2 transition-transform duration-300 ${isDropdownOpen ? 'block' : 'hidden lg:block '} origin-top`}>
                        <ul className="flex-col lg:flex-row lg:items-center lg:space-x-2 flex  mt-4 lg:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link to={'/'} className="font-bold text-md hover:bg-[#007300] hover:shadow-2xl hover:text-white block pl-3 pr-4 py-2 md:p-2">Home</Link>
                            </li>
                            <li>
                                <a  href="#aboutus"  className="hover:bg-[#007300] font-bold text-md hover:shadow-2xl hover:text-white block pl-3 pr-4 py-2 md:p-2 transform hover:scale-95 transition-transform duration-300">About us</a>
                            </li>
                            <li>
                                <a  href="#pastevent"  className="hover:bg-[#007300] font-bold text-md hover:shadow-2xl hover:text-white block pl-3 pr-4 py-2 md:p-2 transform hover:scale-95 transition-transform duration-300">Past Events</a>
                            </li>
                            <li>
                                <a href="#upcomingevent" className="hover:bg-[#007300] font-bold text-md hover:shadow-2xl hover:text-white block pl-3 pr-4 py-2 md:p-2 transform hover:scale-95 transition-transform duration-300">Upcoming Events</a>
                                
                            </li>
                            <li>
                                <Link to={'/Gallery'} className="hover:bg-[#007300] font-bold text-md hover:shadow-2xl hover:text-white block pl-3 pr-4 py-2 md:p-2 transform hover:scale-95 transition-transform duration-300">Gallery</Link>
                            </li>
                            <li>
                                <a  href="#contact"  className="hover:bg-[#007300] font-bold text-md hover:shadow-2xl hover:text-white block pl-3 pr-4 py-2 md:p-2 transform hover:scale-95 transition-transform duration-300">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar