import { View, Image, Dimensions } from 'react-native'
import { emptyResourcesImage } from '~/assets'
import { PaperText } from '~/containers'

import { styles } from './EmptyResource.styles'

const EmptyResource = () => {
  const windowHeight = Dimensions.get('window').height
  const windowWidth = Dimensions.get('window').width

  const title = 'Categories' // import
  const description = // import
    'Create your custom Categories to be able categorizing \n your Resources for better structure and navigation.'
  return (
    <View
      accessibilityRole='scrollbar'
      style={styles.container(windowHeight, windowWidth)}
    >
      <Image source={emptyResourcesImage} style={styles.image} />
      <PaperText bold style={styles.title}>
        Your have no {title} yet
      </PaperText>
      <PaperText style={styles.description}>{description}</PaperText>
    </View>
  )
}

export default EmptyResource
