import { StyleSheet } from 'react-native'
import palette from '~/styles/app-theme/app.pallete'

export const styles = StyleSheet.create({
  linearGradient: {
    width: 500,
    height: 500,
    borderRadius: 500,
    position: 'absolute',
    top: '15%',
    left: -70
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 120,
    height: 120
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center'
  },
  loginButton: {
    width: '90%',
    backgroundColor: palette.surfaceVariant,
    marginVertical: 15
  },
  loginContent: {
    flexDirection: 'row-reverse'
  },
  loginText: {
    color: palette.secondary
  },
  mainContent: {
    flex: 0.7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBox: {
    flex: 0.15,
    width: '100%',
    alignItems: 'center'
  },
  subtitle: {
    width: '100%',
    color: palette.outlineColor,
    textAlign: 'center'
  }
})
