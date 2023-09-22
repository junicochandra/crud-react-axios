import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail() {
  const [category, setCategory] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL+'/api/category/'+id)
    .then(response => setCategory(response))
    .catch(err => console.log(err));
  }, []);

  const { id: categoryId } = category?.data?.data?.result || {};
  const { name: categoryName } = category?.data?.data?.result || {};
  
  return (
    <>
      <h1>Detail of category</h1>
      <div className="mb-2">
        <strong>Category Name : {categoryName}</strong>
      </div>
      <Link to={`/category/update/${categoryId}`} className="btn btn-success">Edit</Link>
      <Link to="/category" className="btn btn-primary ms-3">Back</Link>
    </>
  )
}
