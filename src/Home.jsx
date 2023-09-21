/* eslint-disable no-unused-vars */
import axios from "axios"
import {useEffect} from "react"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Delete ?");
    if(confirm){
      axios.delete('http://localhost:3000/users/'+id)
      .then(res => {
        location.reload(); 
      })
      .catch(err => console.log(err));
    }
  }
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of users</h1>
      <div className="w-100 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end mb-3">
          <Link to="/create" className="btn btn-success">Add +</Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>
                    <Link to={`/read/${d.id}`} className="btn btn-sm btn-info me-1">Read</Link>
                    <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-1">Edit</Link>
                    <button onClick={ e => handleDelete(d.id) } className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
