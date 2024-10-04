import { StyleSheet } from 'react-native'
import palette from '~/styles/app-theme/app.pallete'

export const styles = StyleSheet.create({
  roleBox: (pressed) => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: palette.onSurface,
    borderStyle: 'solid',
    borderRadius: 5,
    height: '60%',
    width: 170,
    padding: 10,
    backgroundColor: pressed ? palette.hover : palette.secondary
  }),
  imageWrapper: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  pressed: {},
  image: {
    width: 80,
    height: 80
  }
})
