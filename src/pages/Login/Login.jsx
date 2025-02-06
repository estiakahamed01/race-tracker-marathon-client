import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import lottieSignIn from "../../assets/lottie/SignIn.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log("sign in", result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-10/12 mx-auto">
      <div className="hero bg-green-50 py-14">
        <div className="hero-content flex-col">
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">
              Run With Race <span className="text-green-500">Tracker</span>
            </h1>
            <p className="py-6 w-8/12 text-center">
              Become a part of something new! Sign up today to explore, connect,
              and grow. Fill in your details below to begin your experience.
            </p>
          </div>
          <div className="flex flex-row justify-center gap-10 items-center">
            <div className="card w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6 flex flex-col justify-center items-center">
                  <button className="btn btn-primary mb-7 w-full">
                    Sign In
                  </button>
                  <Link to="/register">
                    <button className="font-semibold">
                      Don't Have An Account ?{" "}
                      <span className="text-red-600">Register</span>
                    </button>
                  </Link>
                  {/* <button onClick={handleGoogleSignIn} className="btn btn-primary mb-7 w-full mt-6"><span className="text-2xl"><FcGoogle /></span>Sign In With Google</button> */}
                </div>
              </form>
            </div>
            <div className="w-[350px]">
              <Lottie animationData={lottieSignIn}></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
