import { StyleSheet } from 'react-native'

const colors = {
  darkBlue: '#273239',
  white: '#fff'
}

export const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center'
  },
  pageContent: {
    flex: 1,
    padding: 20
  },
  footer: {
    marginTop: 'auto'
  },
  loginText: {
    color: colors.darkBlue,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
    textAlign: 'center'
  }
})
