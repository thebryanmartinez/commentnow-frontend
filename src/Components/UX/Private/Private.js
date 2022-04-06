import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Private = ({children}) => {
  const { username } = useSelector((state) => state.security);
  if(/^\s*$/.test(username)){
    return <Navigate to='/'/>
  }
  return (
    <>
      {children}
    </>
  )
}

export default Private;