import { Button } from 'react-native-paper'
import { router } from 'expo-router'
import { View } from 'react-native'

import { PaperText } from '~/containers'
import { useDispatch } from 'react-redux'
import { logout } from '~/redux/reducer'

const Profile = () => {
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
    router.push('/')
  }
  return (
    <View>
      <PaperText>Profile</PaperText>
      <Button
        buttonColor='lightblue'
        mode='contained-tonal'
        onPress={onLogout}
        textColor='#111'
      >
        Log out
      </Button>
    </View>
  )
}

export default Profile
