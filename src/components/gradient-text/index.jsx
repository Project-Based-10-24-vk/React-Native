import { LinearGradient } from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'

import { PaperText } from '~/containers'

import { styles } from './GradientText.styles'

const GradientText = ({
  variant,
  text,
  style,
  colors = ['#294083', '#54BB7D']
}) => {
  return (
    <MaskedView
      maskElement={
        <PaperText style={[styles.defaultText, style]} variant={variant}>
          {text}
        </PaperText>
      }
    >
      <LinearGradient
        colors={colors}
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 0 }}
      >
        <PaperText variant={variant}></PaperText>
      </LinearGradient>
    </MaskedView>
  )
}

export default GradientText
