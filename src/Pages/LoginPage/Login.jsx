import bgImg from "../../assets/others/authentication.png"
import authenticationImg from "../../assets/others/authentication2.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";
import PopUpLogin from "../Shared/PopUpLogin/PopUpLogin";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const CaptchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log("login", loggedUser);
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                });
                navigate(location?.state ? location.state : '/');
                setDisabled(true)
                loadCaptchaEnginge(6)
                reset()
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Something wrong!...",
                    text: "Your email & password Does not match",
                });
            });
    };

    const handleCaptcha = () => {
        const captcha = CaptchaRef.current.value;
        if (validateCaptcha(captcha)) {
            setDisabled(false)
            console.log("captcha", captcha)
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
                    {/* login  */}
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body py-0
                        ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" name="email" {...register("email", { required: true })} className="input input-bordered" />
                            {errors.email && <small className="text-red-500">Email is required</small>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" {...register("password", { required: true })} className="input input-bordered" />
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
                                <input type="text" ref={CaptchaRef} placeholder="Type this Captcha " name="captcha" className="pl-2 rounded-r-none" required />
                                <button onClick={handleCaptcha} className="btn btn-accent rounded-l-none">Valid</button>
                            </div>

                        </div>
                        <div className="form-control ">
                            <input disabled={disabled} className="btn btn-primary bg-yellow-600 border-none" type="submit" value="Sign In" />
                        </div>
                    </form>
                    <div className="flex flex-col gap-1 items-center mt-2">
                        <h4 className="text-yellow-500 text-xs">New here?<Link className="font-bold ml-2" to="/sign-up">Create a New Account</Link> </h4>
                        <PopUpLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;