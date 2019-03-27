import { useEffect, useState } from 'react'

const useDevice = (agent?) => {
  const userAgent = agent || navigator.userAgent
  const [mobile, setMobile] = useState(false)

  const isAndroid = () => Boolean(userAgent.match(/Android/i))
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
  const isMobile = () => isAndroid() || isIos()

  useEffect(() => {
    setMobile(isMobile())
  }, [])

  return {
    mobile,
  }
}

export default useDevice
