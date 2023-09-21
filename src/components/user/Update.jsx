import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate} from "react-router-dom";

export default function Update() {
  // const [data, setData] = useState([]);
  const {id} = useParams();

  const [values, setValues] = useState({
    name: '',
    email: '',
  });  

  useEffect(() => {
    axios.get('http://localhost:3000/users/'+id)
    .then(res => {
      setValues(res.data);
    })
    .catch(err => console.log(err));
  }, []);

  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put('http://localhost:3000/users/'+id, values)
    .then(res => {
      console.log(res);
      navigate('/');
    })
    .catch(err => console.log(err));
  }

  return (
    <>
    <h1>Update a user</h1>
    <form onSubmit={handleUpdate}>
      <div className="mb-2">
        <label htmlFor="name" className="form-label">Name:</label>
        <input type="text" name="name" className="form-control"
        value={values.name}
        onChange={e => setValues({...values, name: e.target.value})} />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="text" name="email" className="form-control"
        value={values.email}
        onChange={e => setValues({...values, email: e.target.value})} />
      </div>
      <button className="btn btn-success">Update</button>
      <Link to="/" className="btn btn-primary ms-3">Back</Link>
    </form>
    </>
  )
}
