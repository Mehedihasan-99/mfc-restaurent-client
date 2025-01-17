import React from 'react';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();


    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    };


    return (
        <div>
            <SectionTitle heading='manage all item' subHeading='Hurry up' />
            <div className="mt-12 p-10 min-h-screen bg-white rounded-xl">
                <h2 className="text-lg font-semibold uppercase"><span className='pr-2'>total items :</span>{menu.length} </h2>
                {/* Table for cart item  */}
                <div className=" overflow-x-auto rounded rounded-t-lg mt-4 ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-orange-400 text-white uppercase">
                                <th></th>
                                <th> item image</th>
                                <th>item name</th>
                                <th>price</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id} className="text-gray-500 border-b-2">
                                    <th>{index + 1} </th>
                                    <td>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className='rounded-tl-2xl rounded-br-2xl max-h-12'
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <th>
                                        <Link to={`/dashboard/update/${item._id}`}>
                                            <button className="btn rounded-md bg-orange-400 btn-xs"><FaEdit /></button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={() => { handleDelete(item) }} className="btn rounded-md btn-error btn-xs"><RiDeleteBin6Line /></button>
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

export default ManageItems;