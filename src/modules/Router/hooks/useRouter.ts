import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import { History } from 'history'
import UniversalRouter, { Routes } from 'universal-router'

import useLocation from '../hooks/useLocation'

const useRouter = (
  routes: Routes<any, { default: React.ComponentType }>,
  history: History<any>
) => {
  const location = useLocation(history)
  const router = useMemo(() => new UniversalRouter(routes), [routes])
  const [Component, setComponent] = useState<React.ReactType>('div')

  useEffect(() => {
    const LazyComponent = React.lazy(() => router.resolve(location.pathname))
    setComponent(() => LazyComponent)
  }, [location])

  return Component
}

export default useRouter
