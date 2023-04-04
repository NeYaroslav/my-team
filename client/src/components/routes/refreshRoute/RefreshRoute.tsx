import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useRefreshQuery } from '../../../redux/services/authApi'
import { setToken } from '../../../redux/slices/authSlice'
import { useAppDispatch } from '../../../redux/hooks'
import { Preloader } from '../../../ui'


const RefreshRoute = () => {
  const { data, isLoading } = useRefreshQuery()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data?.token) {
      dispatch(setToken(data?.token))
    }
  }, [data])

  if(isLoading) return <Preloader/>
  if (data?.token) return <Navigate to={'/home'} />
  return <Outlet />
}

export default RefreshRoute
