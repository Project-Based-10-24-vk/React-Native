import { useCallback } from 'react'
import { Linking } from 'react-native'
import { PaperText } from '~/containers'

import { styles } from './url.styles'

const Url = ({ url, children }) => {
  const handlePress = useCallback(() => {
    Linking.openURL(url)
  }, [url])

  return (
    <PaperText onPress={handlePress} style={styles.text}>
      {children}
    </PaperText>
  )
}

export default Url
