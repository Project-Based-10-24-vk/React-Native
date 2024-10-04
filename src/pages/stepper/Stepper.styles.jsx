import { StyleSheet } from 'react-native'
import palette from '~/styles/app-theme/app.pallete'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  mainContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    paddingVertical: 10
  },
  button: {
    backgroundColor: palette.surfaceVariant,
    marginVertical: 10
  },
  buttonContent: {
    flexDirection: 'row-reverse'
  },
  progressBar: {
    borderRadius: 5,
    marginVertical: 10
  }
})
