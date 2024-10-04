import { View, Image } from 'react-native'
import { Button } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from 'react-i18next'

import { iconInfo } from '~/assets'
import { PaperText } from '~/containers'

import { styles } from '~/pages/verified/Verified.styles'

const Verified = () => {
  const { t } = useTranslation()

  const onPress = () => {
    router.replace('public/login')
  }

  return (
    <View style={styles.root}>
      <View style={styles.mainContent}>
        <LinearGradient
          colors={[
            'rgba(179, 251, 255, 0)',
            'rgba(179, 251, 255, 0.3)',
            'rgba(179, 251, 255, 0)'
          ]}
          style={styles.linearGradient}
        />
        <View style={styles.imageWrapper}>
          <Image source={iconInfo} style={styles.image} />
        </View>
        <PaperText style={styles.title} variant='headlineMedium'>
          {t('verified.title')}
        </PaperText>
        <PaperText style={styles.subtitle} variant='titleSmall'>
          {t('verified.description')}
        </PaperText>
      </View>
      <Button
        contentStyle={styles.loginContent}
        icon={() => (
          <AntDesign
            color='#fff'
            name='arrowright'
            size={20}
            style={styles.icon}
          />
        )}
        mode='contained'
        onPress={onPress}
        style={styles.loginButton}
      >
        <PaperText style={styles.loginText}>{t('verified.login')}</PaperText>
      </Button>
    </View>
  )
}

export default Verified
