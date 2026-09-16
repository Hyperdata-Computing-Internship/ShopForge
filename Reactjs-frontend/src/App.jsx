import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "./components/loginpage/login";
import Productcards from './components/productspage/Productcards'
import Signup from './components/loginpage/signup';
import Navbar from './components/homepage/navbar';
import Homepage from './components/homepage/homepage';

const App = () => {
  return (
    <div>
      <Navbar cartcount={5}/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signup' element={<Homepage />} />
        <Route path='/products' element={<Productcards title="Leather Shoes" description="premium shoes" image="https://static.vecteezy.com/system/resources/thumbnails/048/720/410/small_2x/men-s-leisure-leather-shoe-isolated-on-transparent-background-free-png.png"  />} />
      </Routes>
    </div>
  )
}

export default App
