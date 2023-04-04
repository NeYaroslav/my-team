import React from 'react'
import { Route, Outlet, Routes } from 'react-router-dom'
import { LogIn, SignUp } from '../pages'
import { ProtectedRoute, RefreshRoute } from '../components/routes'
import { Preloader } from '../ui'

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route element={<RefreshRoute />}>
          <Route index element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<p>Helloo here</p>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Routing
