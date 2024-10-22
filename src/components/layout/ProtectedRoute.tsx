import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to='/auth/login' />
}
export default ProtectedRoute
