import Swal from "sweetalert2";
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const Button = ({ text, color, item }) => {
    const { user } = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [ , refetch] = useCart();

    
    const handleAddToCart = () => {
        if (user && user?.email) {
            const cartItem = {
                menuId: item._id,
                email: user.email,
                name: item.name,
                image: item.image,
                price: item.price
            };
            axiosSecure.post("/carts", cartItem)
            .then((res) => {
                console.log(res.data)
                if ( res.data.insertedId ) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} Food Add To Cart`,
                        showConfirmButton: false,
                        timer: 2500
                      });
                      refetch();
                }
            })
        }
        else {
            Swal.fire({
                title: "You are not Logged In!",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                    
                }
            });
        }
        
    }
    return (
        <div>
            <button
                onClick={ handleAddToCart }
                className={`btn 
                    btn-outline 
                    border-0 
                    border-b-4 
                    uppercase 
                    ${color === "default" && "text-slate-700 border-slate-700 hover:bg-slate-700  hover:text-white"}
                    ${color === "yellow" && "text-yellow-600 bg-white border-yellow-600 hover:bg-yellow-600 hover:text-white hover:border-yellow-600"}
                    ${color === "white" && "text-white border-white hover:bg-white hover:text-slate-700 hover:border-white"}`}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;