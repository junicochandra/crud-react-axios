/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Home() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL+'/api/category')
    .then(res => setCategories(res.data))
    .catch(err => console.log(err));
  });

  const handleDelete = (id) => {
    const confirm = window.confirm("Delete ?");
    if(confirm){
      axios.delete(import.meta.env.VITE_API_URL+'/api/category/'+id)
      .then(response => {
        location.reload(); 
      })
      .catch(err => console.log(err));
    }
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">List of Category </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                categories.map((category, i) => (
                  <tr key={i}>
                    <td>{category.name}</td>
                    <td>
                        <Link to={`/category/detail/${category.id}`} className="btn btn-sm btn-info me-1">Read</Link>
                        <Link to={`/category/update/${category.id}`} className="btn btn-sm btn-primary me-1">Edit</Link>
                        <button onClick={ e => handleDelete(category.id) } className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    </div>
    </div>
  )
}
