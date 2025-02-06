import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import lottieRegister from '../../assets/lottie/register.json'
import Swal from "sweetalert2";

const Register = () => {
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    console.log(name,email,photoUrl,password)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(!passwordRegex.test(password)){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "At least 1 Uppercase,1 Lowercase & length 6",
      });
      return
    }
        
    }
    return (
        <div className="w-10/12 mx-auto">
      <div className="hero bg-green-50 py-14 flex flex-col items-center">
      <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">Start Your Journey with Race <span className='text-green-500'>Tracker</span></h1>
            <p className="py-6 w-8/12 text-center">
              Become a part of something new! Sign up today to explore, connect,
              and grow. Fill in your details below to begin your experience.
            </p>
          </div>
        <div className="hero-content flex flex-row justify-between w-9/12">
          <div className="card bg-[#5383cf1c] border-[1px] border-red-300 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>

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
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photoUrl"
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
                <button className="btn btn-primary w-full mb-7">Sign Up</button>
                <Link to="/login"><button className="font-semibold">Already Have An Account ? <span className="text-red-600">Sign In</span></button></Link>
              </div>
            </form>
          </div>
          <div>
            <Lottie animationData={lottieRegister}></Lottie>
        </div>
        </div>
        
      </div>
    </div>
    );
};

export default Register;