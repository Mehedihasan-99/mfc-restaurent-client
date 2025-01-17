import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";



const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const price = Math.floor(totalPrice);
    const axiosSecure = useAxiosSecure()

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                timer: 1500
                            });
                            refetch()
                        };
                    })
            }
        });
    }

    return (
        <div className="px-16">
            {/* title  */}
            <SectionTitle subHeading="My Cart" heading="wanna add more?" />
            {/* table  */}
            <div className="mt-12 p-10 min-h-screen bg-white rounded-xl">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold uppercase">total orders: {cart.length}</h2>
                    <h2 className="text-lg font-semibold uppercase">total price: ${price}</h2>
                    {
                        cart.length ? <Link to="/dashboard/payment"><button className="btn bg-orange-400">Pay</button></Link>
                        : <button disabled className="btn bg-orange-400">Pay</button>
                    }
                </div>
                {/* Table for cart item  */}
                <div className=" overflow-x-auto rounded rounded-t-lg mt-4 ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-orange-400 text-white ">
                                <th>#</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id} className="text-gray-500">
                                    <th>{index + 1} </th>
                                    <td className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image}
                                                alt={item.name} />
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={() => { handleDelete(item._id) }} className="btn rounded-md btn-error btn-xs"><RiDeleteBin6Line /></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;