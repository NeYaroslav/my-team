import React from 'react'
import { Route, Outlet, Routes } from 'react-router-dom'
import { LogIn, SignUp } from '../pages'

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default Routing
