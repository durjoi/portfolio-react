import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../utilities/CustomLink';

const Header = () => {
    return (
        <header className="grid grid-cols-2 h-14 bg-black items-center px-6">
            <div className="text-white text-xl">
              <Link to="/">  Durjoi . </Link>
            </div>

            <nav className="flex justify-self-end">
                <CustomLink to="/" className="px-2 ml-8" >Home</CustomLink>
                <CustomLink to="/projects" className="px-2 ml-8" >Projects</CustomLink>
                <CustomLink to="/about" className="px-2 ml-8 ">About</CustomLink>
            </nav>
        </header>
    );
};

export default Header;