import { useState } from 'react'
import { View, Dimensions } from 'react-native'

import MainContent from '~/containers/sign-up/main'
import DetailedContent from '~/containers/sign-up/detailed'

import { styles } from './Signup.styles'
import { Stack } from 'expo-router'

const SignUp = () => {
  const [role, setRole] = useState('')
  const [secondStep, setSecondStep] = useState(false)
  const [visible, setVisible] = useState({
    password: false,
    confirmPassword: false
  })

  const screenHeight = Dimensions.get('window').height

  const toggle = (str) => {
    setVisible((prev) => ({ ...prev, [str]: !prev[str] }))
  }

  const content = secondStep ? (
    <DetailedContent
      backStep={setSecondStep}
      role={role}
      toggle={toggle}
      visible={visible}
    />
  ) : (
    <MainContent chooseRole={setRole} nextStep={setSecondStep} role={role} />
  )

  return (
    <View style={styles.root(screenHeight)}>
      <Stack screenOptions={{ headerShown: false }} />
      {content}
    </View>
  )
}

export default SignUp
