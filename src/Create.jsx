import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [values, setValues] = useState({
    name: '',
    email: '',
  });

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/users', values)
    .then(res => {
      console.log(res);
      navigate('/');
    })
    .catch(err => console.log(err));
  }

  return (
    <>
    <h1>Add a user</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="name" className="form-label">Name:</label>
        <input type="text" name="name" className="form-control" 
        onChange={e => setValues({...values, name: e.target.value})} />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="text" name="email" className="form-control"
        onChange={e => setValues({...values, email: e.target.value})} />
      </div>
      <button className="btn btn-success">Submit</button>
      <Link to="/" className="btn btn-primary ms-3">Back</Link>
    </form>
    </>
  )
}
