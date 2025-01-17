import { SlMenu } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import cartImg from '../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png';
import useCart from "../../../Hooks/useCart";

const Navber = () => {
    const { user, logout } = useAuth();
    const [cart] = useCart();

    const NavLinks = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/contact'>CONTACT US</NavLink></li>
        <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
        <li><NavLink to='/menu'>OUR MENU</NavLink></li>
        <li><NavLink to='/order/salad'>OUR SHOP</NavLink></li>
        <li>{
            user ? <button onClick={logout} >LOGOUT</button> : <NavLink to='/login'>LOGIN</NavLink>
        }</li>
    </>


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
                                    <NavLink to="/dashboard/cart">
                                        <img src={cartImg} alt="" />
                                        <span className="badge badge-sm indicator-item top-7 left-1">+{cart.length}</span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt={user?.displayName}
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] text-black text-lg mt-3 w-52 p-2 shadow">
                                <p> Profile</p>
                                <p className="mb-1">Name :{user?.displayName} </p>
                                <p className="mb-1">Email : {user?.email} </p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;