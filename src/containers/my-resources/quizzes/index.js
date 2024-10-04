import { View } from 'react-native'

import { PaperText } from '~/containers'
import SortAndFilter from '~/components/sort-and-filter/index'

const Quizzes = () => {
  return (
    <View>
      <SortAndFilter />
      <PaperText>Quizzes</PaperText>
    </View>
  )
}

export default Quizzes
