import { FaCalendarCheck, FaCartArrowDown, FaCommentDots, FaEnvelope, FaHome, FaShoppingBag, FaWallet } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {
    const [cart] = useCart()
    const [ isAdmin ] = useAdmin();
    console.log(isAdmin)
    return (
        <div className="flex">

            {/* dashboard side bar  */}
            <div className="w-64 bg-orange-400 min-h-screen p-4">
                <ul className="menu p-4 uppercase">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/admin-home'>
                                    <FaHome /> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/add-items'>
                                    <FaCalendarDays /> add items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manage-items'>
                                    <FaWallet /> manage items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manage-bookings'>
                                    <FaCartArrowDown /> manage bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'>
                                    <FaCommentDots /> all users
                                </NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashboard/home'>
                                        <FaHome /> User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reservation'>
                                        <FaCalendarDays /> Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/payment-history'>
                                        <FaWallet /> Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'>
                                        <FaCartArrowDown /> My Cart ( {cart.length} )
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'>
                                        <FaCommentDots /> Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/booking'>
                                        <FaCalendarCheck /> My Booking
                                    </NavLink>
                                </li></>
                    }
                    <div className="border my-4"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>
                            <MdMenu /> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/:category'>
                            <FaShoppingBag /> Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>
                            <FaEnvelope /> Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* dashboard content  */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;