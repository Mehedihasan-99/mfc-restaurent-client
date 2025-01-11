import { FaFacebook, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import bgImg from "../../assets/others/authentication.png"
import authenticationImg from "../../assets/others/authentication2.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";


const Login = () => {

    const CaptchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(disabled){
            return
        }

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ email, password })
        form.reset();
        setDisabled(true)
        loadCaptchaEnginge(6)
    }

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
                    <form onSubmit={handleSubmit} className="card-body py-0
                        ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Type Here" name="email" className="input input-bordered" required />
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
                                <input type="text" ref={CaptchaRef} placeholder="Type this Captcha " name="captcha" className="flex-1 input input-bordered rounded-r-none" required />
                                <button onClick={handleCaptcha} className="btn btn-accent rounded-l-none">Valid</button>
                            </div>

                        </div>
                        <div className="form-control ">
                            <input disabled={disabled} className="btn btn-primary bg-yellow-600 border-none" type="submit" value="Sign In" />
                        </div>
                    </form>
                    <div className="flex flex-col gap-1 items-center mt-2">
                        <h4 className="text-yellow-500 text-xs">New here? Create a New Account</h4>
                        <p className="font-semibold text-gray-500">Or sign in with</p>
                        <div className="flex gap-3">
                            <span className="border border-black rounded-full p-1"><FaFacebookF /></span>
                            <span className="border border-black rounded-full p-1"><FaGoogle /></span>
                            <span className="border border-black rounded-full p-1"><FaGithub /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;