import { View } from 'react-native'

import { PaperText } from '~/containers'
import SortAndFilter from '~/components/sort-and-filter/index'

const Lessons = () => {
  return (
    <View>
      <SortAndFilter />
      <PaperText>Lessons</PaperText>
    </View>
  )
}

export default Lessons
