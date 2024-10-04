import { StyleSheet } from 'react-native'
import palette from '~/styles/app-theme/app.pallete'

export const styles = StyleSheet.create({
  wrapper: {
    fontWeight: 'bold'
  },
  text: {
    color: palette.primaryGreen
  },
  descriptionText: {
    color: palette.outlineColor
  },
  headlineSmall: {
    fontSize: 20
  },
  headlineMedium: {
    fontSize: 24,
    color: palette.tertiaryContainer
  },
  titleSmall: {
    fontSize: 16,
    color: palette.tertiary
  }
})
