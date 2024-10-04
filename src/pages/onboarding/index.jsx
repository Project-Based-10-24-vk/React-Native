import { StatusBar } from 'expo-status-bar'
import { View, SafeAreaView } from 'react-native'
import { Stack } from 'expo-router'
import { useState } from 'react'

import {
  GestureDetector,
  Gesture,
  Directions
} from 'react-native-gesture-handler'

import { StepIndicator, AnimatedCard, ButtonsGeneral } from '~/components'

import { onboardingSteps } from '~/constants/onboarding'

import { styles } from './Onboarding.style'

const OnboardingScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0)
  const data = onboardingSteps[screenIndex]

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1
    isLastScreen
      ? setScreenIndex(0)
      : setScreenIndex((prevState) => prevState + 1)
  }

  const onBack = () => {
    const isFirstScreen = screenIndex === 0
    isFirstScreen
      ? setScreenIndex(0)
      : setScreenIndex((prevState) => prevState - 1)
  }

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  )

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar style='light' />
      <Stack.Screen options={{ headerShown: false }} />
      <GestureDetector gesture={swipes}>
        <View key={screenIndex} style={styles.pageContent}>
          <AnimatedCard data={data} />
          <View style={styles.footer}>
            <StepIndicator screenIndex={screenIndex} />
            <ButtonsGeneral />
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  )
}

export default OnboardingScreen
