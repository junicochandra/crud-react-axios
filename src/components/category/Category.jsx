import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Update from './Update'
import Detail from './Detail'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Category() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/category' element={<Home />}></Route>
          <Route path='/category/create' element={<Create />}></Route>
          <Route path='/category/update/:id' element={<Update />}></Route>
          <Route path='/category/detail/:id' element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
