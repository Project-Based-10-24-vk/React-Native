import { View, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Link } from 'expo-router'

import { PaperText } from '~/containers'
import { styles } from './HeaderWithBackArrow.styles'

const HeaderWithBackArrow = ({ route, text, onPress }) => {
  const interactiveArrow = onPress ? (
    <Pressable onPress={onPress} style={styles.arrowWrapper} testID='Pressable'>
      <AntDesign name='arrowleft' size={25} />
    </Pressable>
  ) : (
    <Link href={route} style={styles.arrowWrapper}>
      <AntDesign name='arrowleft' size={25} />
    </Link>
  )
  return (
    <View style={styles.headerContainer}>
      {interactiveArrow}
      <PaperText variant='headlineSmall'>{text}</PaperText>
    </View>
  )
}

export default HeaderWithBackArrow
