import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Read() {
  const [data, setData] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    axios.get('http://localhost:3000/users/'+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>Detail of users</h1>
      <div className="mb-2">
        <strong>Name : {data.name}</strong>
      </div>
      <div className="mb-2">
        <strong>Email : {data.email}</strong>
      </div>
      <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
      <Link to="/" className="btn btn-primary ms-3">Back</Link>
    </>
  )
}
