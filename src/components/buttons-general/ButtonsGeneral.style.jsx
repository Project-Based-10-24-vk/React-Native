import { StyleSheet } from 'react-native'
import palette from '~/styles/app-theme/app.pallete'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: palette.onSurface,
    borderRadius: 50,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    padding: 3
  },
  buttonContent: {
    flexDirection: 'row-reverse'
  },
  buttonText: {
    color: palette.backgroundWhite,
    fontSize: 16,
    fontWeight: '700'
  },
  buttonsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    marginTop: 20
  },
  loginText: {
    color: palette.onSurface,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 20,
    textAlign: 'center'
  }
})
