import React, { useState } from 'react';
import Link from './Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact",
            path: "/contact"
        },
        {
            name: "Services",
            path: "/services"
        },
        {
            name: "Jobs",
            path: "/products"
        }
    ]
    const handelMenu = () => {
        setOpen(!open);
    }
    return (
        <div className='md:flex justify-between items-center md:bg-green-200 px-4'>
            <div className=''>Logo Here</div>
            <div className='relative'>
                <span className='flex justify-end md:hidden'>
                    {open ? <XMarkIcon className="h-6 w-6" onClick={handelMenu} /> : <Bars3Icon className="h-6 w-6" onClick={handelMenu} /> }
                </span>
                <ul className={`md:flex relative md:static transition-all duration-500 ${open? 'block':'hidden'}`}>
                    {
                        routes.map((route, index) =>
                            <Link route={route}  key={index}><li className=''></li></Link>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;