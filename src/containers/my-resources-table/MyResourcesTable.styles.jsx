import { StyleSheet } from 'react-native'
import palette from '~/styles/app-theme/app.pallete'

export const styles = StyleSheet.create({
  nameCell: {
    flex: 10
  },
  bg: {
    backgroundColor: palette.backgroundWhite
  },
  addButton: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    padding: 20,
    backgroundColor: '#357F81',
    borderRadius: 20
  },
  footerComponent: { alignItems: 'center', paddingVertical: 95 }
})
