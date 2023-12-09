import React from 'react';

const Navbar = () => {
    return (
        <div className='w-full py-3 px-2 bg-white text-black shadow-lg flex justify-center items-center gap-5 '>
            <img
                src="https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-beautiful-blue-book-illustration-image_1409033.jpg"
                alt="logo"
                width={30}
                height={30}
            />
            <ul className='flex justify-center items-center gap-10 text-base font-semibold'>
                Book Matching
            </ul>
        </div>
    );
};

export default Navbar;
