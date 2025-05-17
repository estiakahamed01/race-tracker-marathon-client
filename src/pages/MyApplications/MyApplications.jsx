import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const MyApplications = () => {
    const {user} = useAuth();
    const [marathons, setMarathons] = useState([])
    useEffect(() =>{
        // fetch(`http://localhost:5000/marathon-register?email=${user.email}`)
        // .then(res => res.json())
        // .then(data =>{
        //     setMarathons(data)
        // })

        axios.get(`http://localhost:5000/marathon-register?email=${user.email}`,{
            withCredentials:true
            
        })
        .then(res => setMarathons(res.data))


    },[user.email])
    return (
        <div>
            <h2>My Application : {marathons.length}</h2>
        </div>
    );
};

export default MyApplications;