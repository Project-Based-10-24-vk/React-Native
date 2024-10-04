import { View, Image } from 'react-native'
import Animated, {
  FadeIn,
  FadeOut,
  SlideOutLeft,
  SlideInRight
} from 'react-native-reanimated'

import { styles } from './AnimatedCard.styles'

const AnimatedCard = ({ data }) => {
  return (
    <>
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        style={styles.imageContainer}
      >
        <Image resizeMode='contain' source={data.image} style={styles.image} />
      </Animated.View>
      <View style={styles.textWrapper}>
        <Animated.Text
          entering={SlideInRight}
          exiting={SlideOutLeft}
          style={styles.title}
        >
          {data.title}
        </Animated.Text>
        <Animated.Text
          entering={SlideInRight.delay(50)}
          exiting={SlideOutLeft}
          style={styles.description}
        >
          {data.description}
        </Animated.Text>
      </View>
    </>
  )
}

export default AnimatedCard
