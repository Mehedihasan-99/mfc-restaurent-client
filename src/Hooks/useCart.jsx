import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    // use tsn Stack query 
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    

    const { data: cart = [], refetch } = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () => {
            if (!user?.email) return []
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        },
        enabled: !!user?.email,
    });
    
    return  [ cart, refetch ]
};

export default useCart;