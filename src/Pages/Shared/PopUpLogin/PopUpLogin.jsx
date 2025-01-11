import { FaFacebook, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
const PopUpLogin = () => {
    return (
        <div>
            <p className="font-semibold text-gray-500">Or sign in with</p>
            <div className="flex gap-3">
                <span className="border border-black rounded-full p-1"><FaFacebookF /></span>
                <span className="border border-black rounded-full p-1"><FaGoogle /></span>
                <span className="border border-black rounded-full p-1"><FaGithub /></span>
            </div>
        </div>
    );
};

export default PopUpLogin;