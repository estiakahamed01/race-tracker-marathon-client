import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { IoLocationOutline } from "react-icons/io5";
import { MdUpdate } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {Helmet} from "react-helmet";

const MyRegister = () => {
  const { user } = useAuth();
  const [marathons, setMarathons] = useState([]);

  const axiosSecure = useAxiosSecure()

  useEffect(() => {

    axiosSecure.get(`/marathon-register?email=${user.email}`)
    .then(res => setMarathons(res.data))

  }, [user.email]);
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Dashboard ⮞ My Apply</title>
      </Helmet>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Event Name & Logo</th>
              <th className="pl-20">Info</th>
              <th className="pl-40">Modify</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                marathons.map( marathon => <tr key={marathon._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={marathon.photoURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{marathon.title}</div>
                          <div className="text-sm opacity-50 inline-flex items-center gap-2"><span><IoLocationOutline /></span>{marathon.location}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                    Marathon Start : {marathon.marathonStart}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                      Distance : {marathon.distance}
                      </span>
                    </td>
                    <td><button className="btn w-full"><MdUpdate /></button></td>
                    
                    <th>
                      <button className="btn w-full"><RxCross2 /></button>
                    </th>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
  );
};

export default MyRegister;
