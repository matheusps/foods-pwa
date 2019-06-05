import React from 'react'
import classNames from 'classnames'
import { FlexContainer } from './Styleguide'

interface Props {
  /** chilren */
  readonly children: JSX.Element
  /** aditional classes */
  readonly className?: string
}

/**
 * Defines a full page layout
 * Obs: It is subscribe to themes through <Container />
 */
const Page = ({ children, className }: Props) => {
  const pageClasses = classNames(className, 'flex w-100 vh-100')
  return <FlexContainer className={pageClasses}> {children}</FlexContainer>
}

export default Page
