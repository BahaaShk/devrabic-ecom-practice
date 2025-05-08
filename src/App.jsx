import React, { useEffect } from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Store from './pages/store'
import Authenticate from './pages/authenticate'
import Cart from './pages/cart'
import { Route, Routes } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './utils/firebaseConfig'
import { MainContext } from './utils/context'
import { fetchUserData } from './utils/firebaseFunctions'

function App() {
  const [user, loading]= useAuthState(auth)

  useEffect(() =>{
    user && fetchUser(user)
    },[user])

const fetchUser = async () => {
  const res = await fetchUserData(user)
  if(res.success){
    console.log(res.data)
  }
}

  return (
    <>
    <MainContext.Provider value={{user, loading}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
</MainContext.Provider>
      {/* <Store /> */}
    </>
  )
}

export default App
