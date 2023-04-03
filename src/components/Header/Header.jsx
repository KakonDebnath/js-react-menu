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
            name: "Products",
            path: "/products"
        }
    ]
    const handelMenu = () => {
        setOpen(!open);
    }
    return (
        <div className='md:flex justify-between items-center bg-green-200 px-4'>
            <div className=''>Logo Here</div>
            <div className='relative'>
                <span className='flex justify-end md:hidden'>
                    
                    {open ? <XMarkIcon className="h-6 w-6" onClick={handelMenu} /> : <Bars3Icon className="h-6 w-6" onClick={handelMenu} /> }
                </span>
                <ul className={`md:flex relative md:static transition-all duration-300 ${open? 'left-0':'-left-48'}`}>
                    {
                        routes.map((route, index) =>
                            <Link route={route} key={index}></Link>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;