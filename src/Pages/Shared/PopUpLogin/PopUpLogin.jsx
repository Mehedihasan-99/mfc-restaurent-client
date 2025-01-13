import { FaFacebook, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const PopUpLogin = () => {
    const { googleLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {       
                navigate(from, { replace: true });
                Swal.fire({
                    title: "Success!",
                    text: "Sign Up is Successfully",
                    icon: "success",
                    confirmButtonText: "Close",
                });
            })
            .catch((err) => {
                Swal.fire("Error", err.message, "error");
            });
    }

    return (
        <div>
            <p className="font-semibold text-gray-500">Or sign in with</p>
            <div className="flex gap-3">
                <button className="border border-black rounded-full p-1"><FaFacebookF /></button>
                <button onClick={handleGoogleLogin} className="border border-black rounded-full p-1"><FaGoogle /></button>
                <button className="border border-black rounded-full p-1"><FaGithub /></button>
            </div>
        </div>
    );
};

export default PopUpLogin;