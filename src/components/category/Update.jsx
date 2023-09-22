import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate} from "react-router-dom";

export default function Update() {
  const {id} = useParams();
  const [values, setValues] = useState({
    name: '',
  });  

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL+'/api/category/'+id)
    .then(response => {
      setValues(response.data);
    })
    .catch(err => console.log(err));
  }, []);

  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(import.meta.env.VITE_API_URL+'/api/category/'+id, values)
    .then(response => {
      navigate('/category');
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
        value={values?.data?.result?.name}
        onChange={e => setValues({...values?.data?.result?.name, name: e.target.value})} />
      </div>
      <button className="btn btn-success">Update</button>
      <Link to="/category" className="btn btn-primary ms-3">Back</Link>
    </form>
    </>
  )
}
