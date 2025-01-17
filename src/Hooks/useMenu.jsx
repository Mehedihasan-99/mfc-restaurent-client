import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    // const [ loading, setLoading ] = useState(true);
    const axiosPublic = useAxiosPublic();

    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: [ 'menu'],
        queryFn: async() => {
            const res = await axiosPublic.get('/menus');
            return res.data;
        }
    })

    // useEffect(() => {
    //     axiosPublic.get('/menus')
    //         .then(res => {
    //             setMenu(res.data);
    //             setLoading(false);
    //         })
    //         .catch(err => {
    //             console.error("Failed to fetch menu: 100", err);
    //             setLoading(false);
    //         });
    // }, [])
    return [ menu, loading, refetch ]
};

export default useMenu;