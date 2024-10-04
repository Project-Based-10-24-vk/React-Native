import { StyleSheet } from 'react-native'
import palette from '~/styles/app-theme/app.pallete'

export const styles = StyleSheet.create({
  container: (windowHeight, windowWidth) => ({
    backgroundColor: palette.backgroundWhite,
    height: windowHeight - 200,
    width: windowWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  }),
  image: {
    width: 240,
    height: 120
  },
  title: {
    color: palette.outlineColor
  },
  description: {
    color: palette.inversePrimary
  }
})
