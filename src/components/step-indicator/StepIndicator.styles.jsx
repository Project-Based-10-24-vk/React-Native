import { StyleSheet } from 'react-native'
import palette from '~/styles/app-theme/app.pallete'

export const styles = StyleSheet.create({
  activeStepIndicator: {
    backgroundColor: palette.inversePrimary
  },
  stepIndicator: {
    backgroundColor: palette.primaryContainer,
    borderRadius: 5,
    height: 10,
    marginHorizontal: 4,
    width: 10
  },
  stepIndicatorContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  }
})
