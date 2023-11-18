/*
    Responsible for rendering Navber
    - responsible for showUser state
    - Link navigation
    - responsible for logout
  
*/

import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";

const Navbar = ({ user }) => {
    const [showUser, setShowUser] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <nav className=" flex justify-between items-center py-4 ">
            <h1 className="text-red-600  font-bold text-3xl">LifeSyncer</h1>

            <ul
                className={`bg-white dark:bg-gray-700 w-48 p-5 rounded-md absolute shadow-md right-[10%] top-[60px] z-10  ${
                    !showNavbar && "hidden "
                } md:min-w-min md:bg-transparent  md:static md:flex gap-10`}
            >
                <li className="cursor-pointer text-xl hover:text-red-400 dark:text-white transition-all">
                    Home
                </li>
                <li className="cursor-pointer text-xl hover:text-red-400  dark:text-white transition-all">
                    <Link href="/register">Register</Link>
                </li>
                <li className="cursor-pointer text-xl hover:text-red-400 dark:text-white transition-all">
                    <Link href="/login">Login</Link>
                </li>
                {user && (
                    <li
                        className="cursor-pointer text-xl dark:text-white transition-all relative"
                        onClick={() => setShowUser(!showUser)}
                    >
                        <img
                            src="/images/man.png"
                            className="dark:invert"
                            width="28px"
                            alt=""
                        />
                        {showUser && (
                            <>
                                <div
                                    className={`bg-white dark:bg-gray-700 w-[200px] absolute right-0 top-9 p-4 shadow-md  block rounded 
            `}
                                >
                                    <h1 className="dark:text-white capitalize">
                                        {user.name}
                                    </h1>
                                    <hr />
                                    <p className="py-2 text-gray-400">
                                        Your Profile
                                    </p>
                                    <Link
                                        href="/logout"
                                        className="mt-3 px-6 py-2 font-bold text-white bg-red-600 rounded-sm"
                                    >
                                        Logout
                                    </Link>
                                </div>
                            </>
                        )}
                    </li>
                )}
            </ul>

            <div className="md:hidden">
                <i
                    className="fa-solid fa-bars dark:text-white text-[30px] text-red-600 cursor-pointer md:hidden"
                    onClick={() => setShowNavbar((prev) => !prev)}
                ></i>
            </div>
        </nav>
    );
};

export default Navbar;
