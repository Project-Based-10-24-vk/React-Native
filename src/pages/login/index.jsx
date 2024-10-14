import { useEffect, useState } from 'react'
import { Link, router } from 'expo-router'
import { View, Dimensions } from 'react-native'
import { TextInput, Button, Divider } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'

import GradientText from '~/components/gradient-text'
import { HeaderWithBackArrow } from '~/components'
import { PaperText } from '~/containers'

import { loginUser } from '~/redux/reducer'
import { styles } from './Login.styles'

const Login = () => {
  const { userRole } = useSelector((state) => state.appMain)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const dispatch = useDispatch()

  const screenHeight = Dimensions.get('window').height

  useEffect(() => {
    if (userRole) {
      router.replace('/(auth)/drawer/tabs/home')
    }
  }, [userRole])

  const toggle = () => {
    setPasswordVisible((prev) => !prev)
  }

  const handlePress = () => {
    dispatch(loginUser(data)).unwrap()
  }
  const onHandleChange = (text, key) => {
    setData((prev) => ({ ...prev, [key]: text }))
  }

  return (
    <View style={styles.root(screenHeight)}>
      <View style={styles.mainContent}>
        <HeaderWithBackArrow route='/' text='Log in' />
        <View>
          <GradientText
            style={styles.headerStyles}
            text='Welcome back!'
            variant='headlineMedium'
          />
          <PaperText style={styles.subtitle} variant='titleSmall'>
            Ready to continue your journey? Please enter your details.
          </PaperText>
        </View>
        <View>
          <TextInput
            keyboardType='email-address'
            label='Email'
            mode='outlined'
            onChangeText={(text) => onHandleChange(text, 'email')}
            theme={styles.inputTheme}
            value={data.email}
          />
          <TextInput
            label='Password'
            mode='outlined'
            onChangeText={(text) => onHandleChange(text, 'password')}
            right={
              <TextInput.Icon
                icon={passwordVisible ? 'eye-off' : 'eye'}
                onPress={toggle}
              />
            }
            secureTextEntry={!passwordVisible}
            theme={styles.inputTheme}
            value={data.password}
          />
        </View>
        <View style={styles.forgotPassword}>
          <Link href='/signup'>
            <PaperText bold variant='titleSmall'>
              Forgot your password?
            </PaperText>
          </Link>
        </View>
        <Button
          mode='contained'
          onPress={handlePress}
          style={styles.loginButton}
        >
          <PaperText style={styles.loginText}>Log in</PaperText>
        </Button>
        <Divider bold />
      </View>
      <View style={styles.bottomContainer}>
        <Button mode='contained' style={styles.loginButton}>
          <PaperText
            onPress={() => router.replace('/(auth)')}
            style={styles.loginText}
          >
            Login Google
          </PaperText>
        </Button>
        <View style={styles.signUpBox}>
          <PaperText style={styles.signUpText}>
            Don&apos;t have an account?
          </PaperText>
          <PaperText
            bold
            onPress={() => router.replace('public/signup')}
            variant='titleSmall'
          >
            Join us for free!
          </PaperText>
        </View>
      </View>
    </View>
  )
}

export default Login
