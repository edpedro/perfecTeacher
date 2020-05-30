import React, { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AuthLogin } from '../../store/mdules/user/actions'

import { isAuthenticated } from '../../authentication/auth'

function Auth({ children }) {
  const dispatch = useDispatch()

  const initAuth = useCallback(async () => {
    if (isAuthenticated) {
      await dispatch(AuthLogin())
    }

  }, [dispatch])

  useEffect(() => {
    initAuth()
  }, [initAuth])

  return (
    <>
    {children}
    </>
    )
}
export default Auth