import { Outlet, Navigate } from 'react-router-dom'
import { useAppSelctor } from '../../../redux/hooks'

const ProtectedRoute = () => {
  const selector = useAppSelctor((data) => data.auth)
  
  if (selector) return <Outlet />
  return <Navigate to={'/'} />
}

export default ProtectedRoute
