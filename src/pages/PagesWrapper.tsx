import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'

interface Props {
  /** children  */
  readonly children: any
}

const PagesWrapper = ({ children }: Props) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  )
}

export default PagesWrapper
