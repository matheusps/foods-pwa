import React, { useContext } from 'react'
import { AuthContext } from '../../modules/Auth'

interface Props {
  text?: string
  rest?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const LoginBtn = ({ text, ...rest }: Props) => {
  const { auth } = useContext(AuthContext)
  return (
    <button onClick={auth.login} {...rest}>
      {text}
    </button>
  )
}

LoginBtn.defaultProps = {
  text: 'Login',
}

export default LoginBtn
