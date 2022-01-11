import { ChevronDownIcon, LogoutIcon, UserCircleIcon, MenuIcon, MenuAlt3Icon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

function Header() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const handleNavbar = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])

    return (
        <div className='flex justify-center'>
            <div className='main-grid-item'>
                <section className='grid grid-cols-2 items-center px-6 py-3 text-lg h-fit'>
                    <div className='flex space-x-5 cursor-pointer'>
                        <img src="https://www.swedbank.lt/webjars/webcomponents/2.2.7/assets/images/swedbank-logo.svg" className='w-48' alt='Swedbank'/>
                        <div className='items-center hidden lg:flex cursor-pointer'>
                            <p>Private</p>
                            <ChevronDownIcon className='w-6 sb-color'/>
                        </div>
                    </div>
                    <div className='items-center flex ml-auto space-x-5'>
                        <div className='flex items-center ml-0 cursor-pointer'>
                            <p>EN</p>
                            <ChevronDownIcon className='w-6 sb-color hidden lg:flex'/>
                        </div>
                        <div className='items-center hidden lg:flex cursor-pointer'>
                            <p className='sb-underline'>Become a customer</p>
                        </div>
                        <div className='items-center flex cursor-pointer'>
                            <div className='hidden lg:flex'>
                                <LogoutIcon className='w-6 sb-color'/>
                                <p className='sb-underline'>Log in</p>
                            </div>
                            <div className='flex lg:hidden'>
                                <UserCircleIcon className='w-6'/>
                            </div>
                        </div>
                        <div className='items-center flex lg:hidden cursor-pointer'>
                            {toggleMenu ? <MenuAlt3Icon onClick={handleNavbar} className='w-6'/> : <MenuIcon onClick={handleNavbar} className='w-6'/>}
                        </div>
                    </div>           
                </section>
                <section>
                    {(toggleMenu || screenWidth > 1024) && (<Navbar/> )}
                </section>
            </div>
        </div>       
    )
}

export default Header
