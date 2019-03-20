import { useState, useEffect } from 'react'
import { History } from 'history'

function useLocation(history: History<any>) {
  const [location, setLocation] = useState(history.location)
  useEffect(() => {
    const unlisten = history.listen(location => setLocation(location))
    return () => unlisten()
  }, [history])
  return location
}

export default useLocation
