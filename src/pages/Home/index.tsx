import React from 'react'
import Page from '../../components/Page'

import './style.css'
import LogoutBtn from '../../components/LogoutBtn'

const Home = () => {
  return (
    <Page>
      <h1>App home</h1>
      <LogoutBtn />
    </Page>
  )
}

export default Home
