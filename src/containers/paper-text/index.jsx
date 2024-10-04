import { Text } from 'react-native-paper'
import { StyleSheet } from 'react-native'

import { styles } from './PaperText.styles'

const PaperText = ({
  children,
  style = {},
  variant = '',
  bold = false,
  onPress = () => {}
}) => {
  let styleVariant

  switch (variant) {
    case 'title':
      styleVariant = StyleSheet.flatten([styles.text, style])
      break
    case 'descriptionText':
      styleVariant = StyleSheet.flatten([styles.descriptionText, style])
      break
    case 'combineText':
      styleVariant = StyleSheet.flatten([
        styles.descriptionText,
        styles.text,
        style
      ])
      break
    case 'headlineSmall':
      styleVariant = StyleSheet.flatten([styles.headlineSmall, style])
      break
    case 'headlineMedium':
      styleVariant = StyleSheet.flatten([styles.headlineMedium, style])
      break
    case 'titleSmall':
      styleVariant = StyleSheet.flatten([styles.titleSmall, style])
      break
    default:
      styleVariant = StyleSheet.flatten([style])
      break
  }

  return (
    <Text onPress={onPress} style={[styleVariant, bold && styles.wrapper]}>
      {children}
    </Text>
  )
}

export default PaperText
