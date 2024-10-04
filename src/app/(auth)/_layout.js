import { router } from 'expo-router'
import { useSelector } from 'react-redux'
import { Slot } from 'expo-router'
import { useEffect } from 'react'

const AppLayout = () => {
  const { isFirstLogin, userRole } = useSelector((state) => state.appMain)

  useEffect(() => {
    if (!userRole) {
      router.replace('/')
    }

    if (isFirstLogin) {
      return router.replace('(auth)/stepper')
    }
  }, [isFirstLogin, userRole])

  return <Slot />
}

export default AppLayout
