import React from 'react'
import classNames from 'classnames'
import { FiHome, FiUser, FiLayers, FiHash } from 'react-icons/fi'

import Container from './Styleguide/Container'
import useMedia, { presets } from '../hooks/useMedia'
import { Link } from '../modules/Router'

interface Props {
  className?: string
}

const Navbar = ({ className }: Props) => {
  const mobile = useMedia(presets.mobile)

  const navbarClasses = classNames(
    className,
    'fixed flex w-100 left-0 right-0 justify-around',
    {
      'bottom-0': mobile,
      'top-0': !mobile,
    }
  )

  return (
    <Container className={navbarClasses}>
      <Link href="/home">
        <FiHome size="30" />
      </Link>
      <Link href="/settings">
        <FiUser size="30" />
      </Link>
      <Link>
        <FiLayers size="30" />
      </Link>
      <Link>
        <FiHash size="30" />
      </Link>
    </Container>
  )
}

Navbar.defaultProps = {}

export default Navbar
