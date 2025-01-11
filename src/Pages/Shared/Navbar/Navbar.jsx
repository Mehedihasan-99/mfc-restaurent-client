import { SlMenu } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navber = () => {
    const { user, logout } =useAuth()
    const NavLinks = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/contact-us'>CONTACT US</NavLink></li>
        <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
        <li><NavLink to='/menu'>OUR MENU</NavLink></li>
        <li><NavLink to='/order/salad'>OUR SHOP</NavLink></li>
        <li>{ !user && <NavLink to='/login'>LOGIN</NavLink>}</li>
    </>

    const handleLogout = () => {
        logout()
        console.log("logout")
    }
    return (
        <div className="fixed z-40 w-full bg-black bg-opacity-25 text-white">
            <div className="navbar px-2
             md:px-10">
                <div className="">
                    <div className="dropdown lg:hidden ">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-xl lg:text-2xl">
                            <SlMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-slate-400 text-white rounded-md z-[1] mt-3 p-2 shadow">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="md:text-xl lg:text-4xl text-red-400 font-bold">MFC</h1>
                        <p className="text-[10px] md:text-sm lg:text-base -mt-2">Restaurant</p>
                    </div>
                </div>
                <div className='navbar-end flex-1 gap-5'>
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-5 ">
                            {NavLinks}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg font-bold">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt={user?.email}
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] text-black text-lg mt-3 w-52 p-2 shadow">
                                <p> Profile</p>
                                <p className="mb-1"> {user?.email} </p>
                                <button onClick={handleLogout} className="btn btn-sm btn-accent">Logout</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;