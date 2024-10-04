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
  InputContainer: {
    paddingVertical: 10
  },
  inputTheme: {
    colors: { primary: palette.primary, underlineColor: 'transparent' },
    mode: 'exact'
  },
  bottomInput: {
    marginVertical: 10
  },
  rolesContainer: {
    padding: 10,
    paddingLeft: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  buttonContent: {
    flexDirection: 'row-reverse'
  },
  buttonText: {
    color: palette.secondary
  },
  button: {
    backgroundColor: palette.surfaceVariant
  },
  title: {
    marginVertical: 10
  },
  mainContaner: {
    flex: 1
  },
  subtitle: {
    color: palette.outlineColor
  },
  titleMain: {
    color: palette.primaryGreen
  },
  separator: {
    width: 20
  }
})
