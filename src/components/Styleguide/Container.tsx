import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

interface Props {
  fullAtBottom?: boolean
  className?: string
  children?: any
}

/**
 * Easy Flex container
 */

const Container = ({ className, children }: Props) => {
  const containerClasses = classNames(className, 'pa3')
  return <div className={containerClasses}>{children}</div>
}

export default styled(Container)`
  background-color: ${props => props.theme.base};
  color: ${props => props.theme.text};
`
