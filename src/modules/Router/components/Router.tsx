import React from 'react'

import useRouter from '../hooks/useRouter'
import { HistoryProvider } from '../context'

const Router = ({ routes, history, fallback, Wrapper }: IRouter) => {
  const Component = useRouter(routes, history)
  return (
    <HistoryProvider value={history}>
      <Wrapper>
        <React.Suspense fallback={fallback!}>
          <Component />
        </React.Suspense>
      </Wrapper>
    </HistoryProvider>
  )
}

export default Router
