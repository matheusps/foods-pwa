import React, { useEffect, useContext } from 'react'
import { AuthContext } from '../../modules/Auth'

import './style.css'

const Callback = () => {
  const { auth } = useContext(AuthContext)

  useEffect(() => {
    let location = window.location.hash
    if (/access_token|id_token|error/.test(location)) {
      auth.handleAuthentication()
    }
  }, [location])

  return (
    <div className="callback">
      <p>Loading...</p>
    </div>
  )
}

export default Callback
