import bgImg from "../../assets/others/authentication.png"
import authenticationImg from "../../assets/others/authentication2.png"
const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log({email, password})
        form.reset();
    }
    return (
        <div className="min-h-screen py-20 "
            style={{
                backgroundImage: `url('${bgImg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="w-11/12 md:w-10/12 mx-auto shadow-black shadow-2xl hero md:min-h-screen"
                style={{
                    backgroundImage: `url('${bgImg}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className="hero-content flex-col md:flex-row">
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
                            <div className="form-control ">
                                <input className="btn btn-primary bg-yellow-600 border-none" type="submit" value="Sign In" />
                            </div>
                        </form>
                        <div className="flex flex-col gap-1 items-center">
                            <h4 className="text-yellow-500 text-xs">New here? Create a New Account</h4>
                            <p>Or sign in with</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;