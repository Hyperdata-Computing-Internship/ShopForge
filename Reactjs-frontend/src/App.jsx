import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "./components/loginpage/login";
import Productcards from './components/productspage/Productcards'
import Signup from './components/loginpage/signup';
import Navbar from './components/homepage/navbar';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* <Navbar />
      <Login />
      <Signup/>
      <Productcards title="Leather Shoes" description="premium shoes" image="https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png"  /> */}
    </div>
  )
}

export default App
