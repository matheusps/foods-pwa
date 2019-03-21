import React from 'react'

import './style.css'
import { Link } from '../../modules/Router'
import Page from '../../components/Page'

const Landing = () => {
  return (
    <Page>
      <h1>This is a beautiful landing page</h1>
      <Link href="/home">Go to home</Link>
    </Page>
  )
}

export default Landing
