import { StyleSheet } from 'react-native'
import palette from '~/styles/app-theme/app.pallete'

export const styles = StyleSheet.create({
  root: (screenHeight) => ({
    display: 'flex',
    height: screenHeight - 50,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  }),
  buttonText: {
    color: palette.secondary
  },
  buttonCheck: (checked) => ({
    backgroundColor: checked ? palette.surfaceVariant : palette.disabledColor
  }),
  termsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  button: {
    backgroundColor: palette.surfaceVariant
  },
  logInBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40
  },
  logInText: {
    marginHorizontal: 10,
    color: palette.outlineColor,
    fontSize: 16
  },
  textContainer: {
    marginVertical: 15
  },
  mainContaner: {
    flex: 1
  },
  input: {
    marginVertical: 10
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  buttonsContainer: {
    marginTop: 20,
    flex: 0.6,
    display: 'flex',
    justifyContent: 'space-between'
  },
  subtitle: {
    color: palette.outlineColor
  },
  titleDetailed: {
    color: palette.primaryGreen
  },
  inputTheme: {
    colors: { primary: palette.primary, underlineColor: 'transparent' },
    mode: 'exact'
  }
})
