import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'

interface Props {
  /** children  */
  readonly children: any
}

const Wrapper = ({ children }: Props) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  )
}

export default Wrapper
