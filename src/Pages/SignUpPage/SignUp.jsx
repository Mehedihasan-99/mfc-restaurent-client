import bgImg from "../../assets/others/authentication.png"
import authenticationImg from "../../assets/others/authentication2.png";
import PopUpLogin from "../Shared/PopUpLogin/PopUpLogin";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(() => {
                console.log("user create")
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log("user update is success")
                        Swal.fire({
                            title: "Success!",
                            text: "Sign Up is Successfully",
                            icon: "success",
                            confirmButtonText: "Close",
                        });
                        reset();
                        navigate(location?.state ? location.state : '/');
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
                        alert(err.code)
                        Swal.fire({
                            icon: "error",
                            title: "Login Failed",
                            text: message,
                        });
                    });

            })
    };


    return (
        <div className="min-h-screen py-20 "
            style={{
                backgroundImage: `url('${bgImg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="w-11/12 md:w-10/12 mx-auto shadow-black shadow-lg hero-content flex-col md:flex-row-reverse">
                <div className="md:w-1/2 text-center lg:text-left">
                    <img src={authenticationImg} alt="" />
                </div>
                <div className="card flex-col  md:w-1/2">
                    <h2 className="text-center font-bold text-xl md:text-3xl">Sign Up</h2>
                    {/* form  */}
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body py-0
                        ">
                        {/* name  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" {...register("name", { required: true })} className="input input-bordered" />
                            {errors.name && <small className="text-red-500">Name is required</small>}
                        </div>
                        {/* email  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" {...register("email", { required: true })} className="input input-bordered" />
                            {errors.email && <small className="text-red-500">Email is required</small>}
                        </div>
                        {/* photo  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Your Photo URL" {...register("photo", { required: true })} className="input input-bordered" />
                            {errors.photo && <small className="text-red-500">Photo URL is required</small>}
                        </div>
                        {/* password  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/ })} className="input input-bordered" />
                            {errors.password?.type === "required" && (
                                <small className="text-red-500">Password is required.</small>
                            )}
                            {errors.password?.type === "pattern" && (
                                <small className="text-red-500">
                                    Password must include at least 1 uppercase letter, 1 lowercase letter, and 1 number.
                                </small>
                            )}
                            {errors.password?.type === "minLength" && (
                                <small className="text-red-500">Password must be at least 6 characters long.</small>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <small className="text-red-500">Password must be at most 20 characters long.</small>
                            )}
                        </div>
                        <div className="form-control ">
                            <input className="btn btn-primary bg-yellow-600 border-none" type="submit" value="Sign up" />
                        </div>
                    </form>
                    <div className="flex flex-col gap-1 items-center mt-2">
                        <h4 className="text-yellow-500 text-xs">Allready registered? <Link to="/login" className="font-bold"> Go to log in</Link></h4>
                        <PopUpLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;