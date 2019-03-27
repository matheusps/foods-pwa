import React from 'react'
import classNames from 'classnames'
import { FiHome, FiUser, FiLayers, FiHash } from 'react-icons/fi'

import Container from './Styleguide/Container'
import { Link } from '../modules/Router'
import useAuth from '../modules/Auth/useAuth'
import useDevice from '../hooks/useDevice'

interface Props {
  className?: string
}

/** Spacer for the rest of content */
const Spacer = () => <div className="bg-base w-100 relative h3" />

/**
 * App navigation bar
 */
const Navbar = ({ className }: Props) => {
  const { mobile } = useDevice()
  const { isAuthenticated, login } = useAuth()

  const navbarClasses = classNames(
    className,
    'fixed flex w-100 left-0 right-0 justify-around z-max',
    mobile ? 'bottom-0' : 'top-0'
  )

  const authLinks = [
    {
      route: '/home',
      icon: <FiHome size="30" />,
    },
    {
      route: '/settings',
      icon: <FiUser size="30" />,
    },
    {
      route: '',
      icon: <FiLayers size="30" />,
    },
    {
      route: '',
      icon: <FiHash size="30" />,
    },
  ]

  return (
    <>
      <Container className={navbarClasses}>
        {isAuthenticated() ? (
          <>
            {authLinks.map(link => (
              <Link href={link.route}>{link.icon}</Link>
            ))}
          </>
        ) : (
          <a onClick={login}>Login</a>
        )}
      </Container>
      {!mobile && <Spacer />}
    </>
  )
}

export default Navbar
