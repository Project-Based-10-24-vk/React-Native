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
      testID={`step-indicator${index === screenIndex ? '-active' : '-inactive'}`}
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
