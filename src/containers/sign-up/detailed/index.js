import { useState } from 'react'
import { View } from 'react-native'
import { TextInput, Button, Checkbox, Divider } from 'react-native-paper'
import { router } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { HeaderWithBackArrow, Url } from '~/components'
import { PaperText } from '~/containers'
import {
  Terms,
  PrivacyPolicy
} from '~/containers/sign-up/detailed/DetailedContent.constants'

import palette from '~/styles/app-theme/app.pallete'
import { styles } from './DetailedContent.styles'

const DetailedContent = ({ visible, toggle, role, backStep }) => {
  const [checked, setChecked] = useState(false)
  const { t } = useTranslation()

  const description =
    role === 'student'
      ? 'signup.detailedStudentDescription'
      : 'signup.detailedTutorDescription'
  const toggleCheckbox = () => {
    setChecked(!checked)
  }

  const signUp = () => {
    router.replace('public/verified')
  }

  const handlePress = () => {
    backStep((prev) => !prev)
  }

  return (
    <>
      <HeaderWithBackArrow onPress={handlePress} route='/' text='Sign up' />
      <View style={styles.mainContaner}>
        <View style={styles.textContainer}>
          <PaperText bold style={styles.title} variant='headlineMedium'>
            <PaperText bold style={styles.titleDetailed}>
              {role === 'student' ? 'Learn ' : 'Share '}
            </PaperText>
            your experience
          </PaperText>
          <PaperText style={styles.subtitle} variant='titleSmall'>
            {t(description)}
          </PaperText>
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            keyboardType='email-address'
            label={t('signup.email')}
            mode='outlined'
            theme={styles.inputTheme}
          />
          <TextInput
            label={t('signup.password')}
            mode='outlined'
            right={
              <TextInput.Icon
                icon={visible.password ? 'eye-off' : 'eye'}
                onPress={() => toggle('password')}
              />
            }
            secureTextEntry={!visible.password}
            style={styles.input}
            theme={styles.inputTheme}
          />
          <TextInput
            label={t('signup.confirmPassword')}
            mode='outlined'
            right={
              <TextInput.Icon
                icon={visible.password ? 'eye-off' : 'eye'}
                onPress={() => toggle('confirmPassword')}
              />
            }
            secureTextEntry={!visible.confirmPassword}
            theme={styles.inputTheme}
          />
        </View>
        <View style={styles.termsContainer}>
          <Checkbox
            color={palette.surfaceVariant}
            onPress={toggleCheckbox}
            status={checked ? 'checked' : 'unchecked'}
          />
          <PaperText>
            {t('signup.TermsAndPrivacy.section1')}
            <Url url={Terms}>{t('signup.TermsAndPrivacy.section2')}</Url>
            {t('signup.TermsAndPrivacy.section3')}
            <Url url={PrivacyPolicy}>
              {t('signup.TermsAndPrivacy.section4')}
            </Url>
          </PaperText>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            disabled={!checked}
            mode='contained'
            onPress={signUp}
            style={[styles.button, styles.buttonCheck(checked)]}
          >
            {t('signup.signUp')}
          </Button>
          <Divider />
          <Button mode='contained' style={styles.button}>
            <PaperText style={styles.buttonText}>
              {t('signup.signUpGoogle')}
            </PaperText>
          </Button>
        </View>
      </View>
      <View style={styles.logInBox}>
        <PaperText style={styles.logInText}>
          {t('signup.haveAccount')}
        </PaperText>
        <PaperText
          bold
          onPress={() => router.replace('/login')}
          style={styles.loginText}
          variant='titleSmall'
        >
          {t('signup.login')}
        </PaperText>
      </View>
    </>
  )
}

export default DetailedContent
