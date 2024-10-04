import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    fontSize: '14'
  },
  categoriesList: (windowWidth) => ({
    width: windowWidth / 2.3,
    height: 49,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    padding: 0,
    margin: 0
  }),
  sortList: (windowWidth) => ({
    width: windowWidth / 2.4
  }),
  title: {
    color: 'black',
    fontSize: 12,
    padding: 0,
    margin: 0
  },
  content: { marginHorizontal: 10 }
})
