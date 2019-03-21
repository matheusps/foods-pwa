import React, { useEffect, useContext } from 'react'
import { AuthContext } from '../../modules/Auth'

import './style.css'

const Callback = () => {
  const { auth } = useContext(AuthContext)

  useEffect(() => {
    if (/access_token|id_token|error/.test(window.location.hash)) {
      auth.handleAuthentication()
    }
  }, [])

  return (
    <div className="callback">
      <p>Loading...</p>
    </div>
  )
}

export default Callback
