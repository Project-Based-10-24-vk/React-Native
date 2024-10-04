import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { router } from 'expo-router'

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label='My resorces'
        onPress={() => router.push('/drawer/tabs/my-resources')}
      />
    </DrawerContentScrollView>
  )
}

export default DrawerContent
