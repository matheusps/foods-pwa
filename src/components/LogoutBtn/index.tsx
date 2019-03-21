import React, { useContext } from 'react'
import { AuthContext } from '../../modules/Auth'

interface Props {
  text?: string
  rest?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const LogoutBtn = ({ text, ...rest }: Props) => {
  const { auth } = useContext(AuthContext)
  return (
    <button onClick={auth.logout} {...rest}>
      {text}
    </button>
  )
}

LogoutBtn.defaultProps = {
  text: 'Logout',
}

export default LogoutBtn
