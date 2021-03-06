import React from 'react'
import { useCallback, useContext } from 'react'

import HistoryContext from '../context'

const Link = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const history = useContext(HistoryContext)
  const handleClick = useCallback(
    (ev: React.MouseEvent<HTMLAnchorElement>) => {
      ev.preventDefault()
      history.push(props.href!)
    },
    [history, props.href]
  )

  return <a onClick={handleClick} {...props} />
}

export default Link
