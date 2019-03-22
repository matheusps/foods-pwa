import React from 'react'

import Loader from '../../components/Styleguide/Loader'
import Page from '../../components/Page/index'

const LoadingPage = () => {
  return (
    <Page className="justify-center items-center">
      <Loader />
    </Page>
  )
}

export default LoadingPage
