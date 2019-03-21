import React, { useEffect, useContext } from 'react'

import './style.css'
import AuthContext from '../../contexts/AuthContext'

interface IPage {
  readonly children: any
}

const Page = ({ children }: IPage) => {
  const { auth } = useContext(AuthContext)

  useEffect(() => {
    localStorage.getItem('isLoggedIn') === 'true' && auth.renewSession()
  }, [])

  return <div className="page">{children}</div>
}

export default Page
