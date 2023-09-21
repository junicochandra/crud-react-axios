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
                        <Link className="btn btn-sm btn-info me-1">Read</Link>
                        <Link className="btn btn-sm btn-primary me-1">Edit</Link>
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
