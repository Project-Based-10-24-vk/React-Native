import { useRef, useState } from 'react'
import { View, Dimensions } from 'react-native'
import { List } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

import { PaperText } from '~/containers'
import { CustomBottomSheet } from '~/components'

import { styles } from './SortAndFilter.styles'
import palette from '~/styles/app-theme/app.pallete'

const SortAndFilter = () => {
  const [expanded, setExpanded] = useState(false)
  const bottomSheetRef = useRef('')
  const snapPoints = ['30%']

  const windowWidth = Dimensions.get('window').width

  const content = (
    <View>
      <PaperText>Modal Content</PaperText>
    </View>
  )

  const onPressSort = () => {
    setExpanded((prev) => !prev)
    bottomSheetRef.current.expand()
  }

  const onPressCategories = () => {
    bottomSheetRef.current.expand()
  }

  return (
    <View style={styles.container}>
      <List.Accordion
        left={(props) => (
          <Ionicons
            {...props}
            color={palette.primary}
            name='color-filter-outline'
            size={20}
          />
        )}
        onPress={onPressCategories}
        right={(props) =>
          props.isExpanded ? (
            <Ionicons color={palette.primary} name='caret-up' size={10} />
          ) : (
            <Ionicons color={palette.primary} name='caret-down' size={10} />
          )
        }
        style={styles.categoriesList(windowWidth)}
        title='Categories'
        titleStyle={styles.title}
      />
      <List.Accordion
        onPress={onPressSort}
        right={(props) =>
          props.isExpanded ? (
            <Ionicons color={palette.primary} name='arrow-up' size={16} />
          ) : (
            <Ionicons color={palette.primary} name='arrow-down' size={16} />
          )
        }
        style={styles.sortList(windowWidth)}
        title='Last updated'
        titleStyle={styles.title}
        {...styles.sortList(windowWidth)}
        expanded={expanded}
      />
      <CustomBottomSheet
        content={content}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
      />
    </View>
  )
}

export default SortAndFilter
