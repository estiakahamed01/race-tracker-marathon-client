import { NavLink, Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const DashboardLayout = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="">
        <Navbar></Navbar>
      </div>
      <h2 className="text-4xl text-green-500 font-bold text-center py-10">Dashboard</h2>
      <div className="flex flex-row min-h-screen gap-10">
        <div className="flex flex-col space-y-4 p-6 rounded-2xl bg-slate-100 h-fit">
            <NavLink to="addMarathon"><button className="btn bg-green-200 w-full">Add Marathon</button></NavLink>
            <NavLink to="myMarathon"><button className="btn bg-green-200 w-full">My Marathon</button></NavLink>
            <NavLink to="myRegister"><button className="btn bg-green-200 w-full">My Apply</button></NavLink>
        </div>

        <div className="w-10/12">
          <Outlet></Outlet>
        </div>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default DashboardLayout;
