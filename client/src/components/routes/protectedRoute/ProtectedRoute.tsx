import { Outlet, Navigate } from 'react-router-dom'
import { useAppSelector } from '../../../redux/hooks'
import { tokenSelector } from '../../../redux/slices/authSlice'

const ProtectedRoute = () => {
  const selector = useAppSelector(tokenSelector)

  if (selector) return <Outlet />
  return <Navigate to={'/'} />
}

export default ProtectedRoute
