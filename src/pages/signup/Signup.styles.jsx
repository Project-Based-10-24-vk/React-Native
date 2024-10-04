import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: (screenHeight) => ({
    display: 'flex',
    height: screenHeight - 50,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  })
})
