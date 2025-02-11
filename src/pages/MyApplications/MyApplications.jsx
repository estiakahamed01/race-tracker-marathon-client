import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplications = () => {
    const {user} = useAuth();
    const [marathons, setMarathons] = useState([])
    useEffect(() =>{
        fetch(`http://localhost:5000/marathon-register?email=${user.email}`)
        .then(res => res.json())
        .then(data =>{
            setMarathons(data)
        })
    },[user.email])
    return (
        <div>
            <h2>My Application : {marathons.length}</h2>
        </div>
    );
};

export default MyApplications;