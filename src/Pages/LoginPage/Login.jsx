import bgImg from "../../assets/others/authentication.png"
import authenticationImg from "../../assets/others/authentication2.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import PopUpLogin from "../Shared/PopUpLogin/PopUpLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(() => {
                navigate(from, { replace: true });
                Swal.fire({
                    title: "Success!",
                    text: "Login Successfully",
                    icon: "success",
                    confirmButtonText: "Close",
                });
                form.reset();
                setDisabled(true);
                loadCaptchaEnginge(6);

            })
            .catch((err) => {
                let message = "Your email & password do not match.";
                if (err.code === "auth/user-not-found") {
                    message = "User not found. Please check your email.";
                } else if (err.code === "auth/wrong-password") {
                    message = "Incorrect password. Please try again.";
                } else if (err.code === "auth/too-many-requests") {
                    message = "Too many failed attempts. Try again later.";
                } else if (err.code === "auth/invalid-credential") {
                    message = "invalid credential.";
                }
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: message,
                });
            });
    }

    const handleCaptcha = (e) => {
        const captcha = e.target.value;
        if (captcha.length > 5 && validateCaptcha(captcha)) {
            setDisabled(false);
        };
    };
    return (
        <div className="min-h-screen py-20 "
            style={{
                backgroundImage: `url('${bgImg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="w-11/12 md:w-10/12 mx-auto shadow-black shadow-lg hero-content flex-col md:flex-row">
                <div className="md:w-1/2 text-center lg:text-left">
                    <img src={authenticationImg} alt="" />
                </div>
                <div className="card flex-col  md:w-1/2">
                    <h2 className="text-center font-bold text-xl md:text-3xl">Login</h2>
                    <form onSubmit={handleSubmit} className="card-body py-0
                        ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Type Here" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* captcha  */}
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <div className="input flex justify-between p-0 ">
                                <input type="text" onChange={handleCaptcha} placeholder="Type this Captcha " name="captcha" className="flex-1 input input-bordered rounded-r-none" required />
                            </div>

                        </div>
                        <div className="form-control ">
                            <input disabled={disabled} className="btn btn-primary bg-yellow-600 border-none" type="submit" value="Sign In" />
                        </div>
                    </form>
                    <div className="flex flex-col gap-1 items-center mt-2">
                        <h4 className="text-yellow-500 text-xs">New here?<Link to={"/sign-up"}>sign Up</Link></h4>
                        <PopUpLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;