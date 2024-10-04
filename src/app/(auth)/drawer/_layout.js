import { Drawer } from 'expo-router/drawer'
import { MaterialIcons } from '@expo/vector-icons'

import palette from '~/styles/app-theme/app.pallete'
import { router } from 'expo-router'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { logout } from '~/redux/reducer'
import { useDispatch } from 'react-redux'

const DrawerContent = (props) => {
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
    router.push('/')
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label='My resorces'
        onPress={() => router.push('/drawer/tabs/my-resources')}
      />
      <DrawerItem label='Log out' onPress={onLogout} />
    </DrawerContentScrollView>
  )
}

export default function Layout() {
  const onPress = () => {
    router.push('/profile')
  }

  const style = { marginRight: 10 }
  return (
    <Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        headerRight: () => (
          <MaterialIcons
            color={palette.surfaceVariant}
            name='account-circle'
            onPress={onPress}
            size={25}
            style={style}
          />
        )
      }}
    />
  )
}
