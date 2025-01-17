import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { RiDeleteBin6Line } from 'react-icons/ri';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaUsers } from 'react-icons/fa';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    });

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${user.name} make a admin`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: `${user.name} is Admin Now`,
                                icon: "success",
                                timer: 1500
                            });
                            refetch()
                        };
                    })
            }
        });
    }
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
                axiosSecure.delete(`/users/${id}`)
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
        <div className="ld:px-16">
            {/* title  */}
            <SectionTitle subHeading="How many??" heading="manage all users?" />
            {/* table  */}
            <div className="mt-12 p-10 min-h-screen bg-white rounded-xl">
                <h2 className="text-lg font-semibold uppercase"><span className='pr-2'>total users :</span>{users.length} </h2>
                {/* Table for cart user  */}
                <div className=" overflow-x-auto rounded rounded-t-lg mt-4 ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-orange-400 text-white ">
                                <th></th>
                                <th> NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id} className="text-gray-500">
                                    <th>{index + 1} </th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <th>
                                        {
                                            user.role === 'admin' ? "Admin" : <button onClick={() => { handleMakeAdmin(user) }} className="btn rounded-md bg-orange-400 btn-xs"><FaUsers /></button>
                                        }
                                    </th>
                                    <th>
                                        <button onClick={() => { handleDelete(user._id) }} className="btn rounded-md btn-error btn-xs"><RiDeleteBin6Line /></button>
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

export default AllUsers;