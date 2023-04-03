import React from 'react';

const Link = ({route}) => {
    return (
        <>
            <li className='md:p-3 py-2 px-3 hover:bg-green-400 transition-all duration-300'><a href={route.path}>{route.name}</a></li>
        </>
    );
};

export default Link;