import { FlatList, View } from 'react-native'
import { onboardingSteps } from '~/constants/onboarding'

import { styles } from './StepIndicator.styles'

const StepIndicator = ({ screenIndex }) => {
  const viewItem = ({ index }) => (
    <View
      style={[
        styles.stepIndicator,
        index === screenIndex ? styles.activeStepIndicator : {}
      ]}
    />
  )

  return (
    <FlatList
      contentContainerStyle={styles.stepIndicatorContainer}
      data={onboardingSteps}
      horizontal
      keyExtractor={(item) => item.key}
      renderItem={viewItem}
    />
  )
}

export default StepIndicator
