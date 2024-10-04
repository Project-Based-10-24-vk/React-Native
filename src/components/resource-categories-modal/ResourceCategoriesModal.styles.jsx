import { StyleSheet } from 'react-native'
import palette from '~/styles/app-theme/app.pallete'

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalView: {
    margin: 20,
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    marginHorizontal: 20
  },
  inputTheme: {
    colors: { primary: palette.primary, underlineColor: 'transparent' },
    mode: 'exact'
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  textInput: { marginVertical: 24 }
})
