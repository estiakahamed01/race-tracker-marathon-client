import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'

const MarathonRegister = () => {
    const {id} = useParams()
    const {user} = useAuth()
    // console.log(id,user)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstname.value;
        const lastName = form.lastname.value;
        const contact = form.contact.value;
        const age = form.age.value;
        const additionalInfo = form.additionalInfo.value;

        // console.log({firstName,lastName,contact,age})

        const marathonRegistration = {
            marathon_id : id,
            applicant_email : user.email,
            firstName,
            lastName,
            contact,
            age,
            additionalInfo
        }
        fetch('http://localhost:5000/marathon-registers',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(marathonRegistration)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: "Registration Successfully",
                    icon: "success",
                    draggable: true
                  });
            }
        })
    }
  return (
    <div className="card bg-base-100 w-10/12 mx-auto shrink-0 shadow-2xl my-8">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="flex flex-row gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-bold">First Name</span>
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-bold">Last Name</span>
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-bold">Contact*</span>
            </label>
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-bold">Age*</span>
            </label>
            <input
              type="text"
              name="age"
              placeholder="Age"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text font-bold">Additional Info</span>
          </label>
          <textarea
            placeholder="Additional Information" name="additionalInfo"
            className="textarea textarea-bordered textarea-md w-full"
          ></textarea>
        </div>
        <button className="btn mt-5">Submit</button>
      </form>
    </div>
  );
};

export default MarathonRegister;
